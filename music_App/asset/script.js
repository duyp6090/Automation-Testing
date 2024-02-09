// ==============Task To Build Music App=======================================

/**
 * 1. Render Song
 * 2. Scroll song
 * 3. Play/ Pause / Seek
 * 4. CD Rotate
 * 5. Next/ Prev
 * 6. Random
 * 7. Next / Repeat When End
 * 8. Active Song
 * 9. Scroll Active Song Into View
 * 10. Play Song When Click
 */


const $ = document.querySelector.bind(document);
const $$ =document.querySelectorAll.bind(document);
const playlist = $('.playlist');
const cd = $('.cd');
const cdThumb = $('.cd-img');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const playNext = $('.btn-next');
const playPrev = $('.btn-prev');
const playRepeat = $('.btn-repeat');
const playRandom = $('.btn-random');
const player = $('.player');
const progress = $('#progress');
const progress1 = $('.progress');
const heading = $('header h2');
const decreaseVolum = $('.decreasevolum');
const increaseVolum = $('.increasevolum');
const volumee = $('#volume');


const PLAY_STORAGE_KEY = "duy_music"

//====================================HOAN THANH NHIEM VU===============================
const App = {
    currentIndex : 0,
    isPlaying: false,
    isRepeat: false,
    isRandom: false,
    config: JSON.parse(localStorage.getItem(PLAY_STORAGE_KEY)) || {},
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAY_STORAGE_KEY, JSON.stringify(this.config));
    },
    songs : [
        {
            name: 'Hạ còn vương nắng',
            singer: 'Datkka',
            path: './asset/music/song1.mp3',
            img: './asset/img/img1.jpg'
        },
        {
            name: 'Phố đã lên đèn',
            singer: 'DDDL',
            path: './asset/music/song2.mp3',
            img: './asset/img/img2.jpg'
        },
        {
            name: 'Phải chăng em đã yêu',
            singer: 'Huyền Tâm Hồn',
            path: './asset/music/song3.mp3',
            img: './asset/img/img3.jpg'
        },
        {
            name: 'Thằng điên',
            singer: 'Rymatic',
            path: './asset/music/song4.mp3',
            img: './asset/img/img4.jpg'
        },
        {
            name: 'Thanh xuân',
            singer: 'GDALAB',
            path: './asset/music/song5.mp3',
            img: './asset/img/img5.jpg'
        },
        {
            name: 'This way',
            singer: 'Đức Phúc',
            path: './asset/music/song6.mp3',
            img: './asset/img/img6.jpg'
        },
        {
            name: 'Cứ thở đi',
            singer: 'Huyền Tâm Hồn',
            path: './asset/music/song7.mp3',
            img: './asset/img/img7.jpg'
        },
        {
            name: 'Tò te tí te',
            singer: 'Totetite',
            path: './asset/music/song8.mp3',
            img: './asset/img/img8.jpg'
        },
        {
            name: 'Chết trong em',
            singer: 'Thịnh Suy',
            path: './asset/music/song9.mp3',
            img: './asset/img/img9.jpg'
        },
    ],
    songPlayed: [],
    render: function() {
        const htmls = [];
        this.songs.forEach((song,index)=>{
                htmls.push( ` 
                <div class="song" id="data-index-${index}" data-index = "${index}">
                    <div class="thumb" style="background-image: url('${song.img}')"></div>
                    <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                `)
            })
        playlist.innerHTML = htmls.join('');
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong',{
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
    },
    handleEvents: function() {
        const _this = this;

        //====================Xu li CD rotate=============================================================
        const cdThumbAnimatetion = cdThumb.animate([ 
            {transform: 'rotate(360deg)'}
        ],{
            duration: 10000, // 10second
            iterations: Infinity,
        })
        cdThumbAnimatetion.pause();

        //====================Xu li phong to thu nho CD===================================================
        const cdWidth = cd.offsetWidth;
        document.onscroll = function() {
            const scollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth /cdWidth;
        }

        // ==================Xu li khi nghe click vao tat bat bai nhac====================================
        playBtn.onclick = function() {
            if(_this.isPlaying){
                audio.pause();
            }
            else{ 
                audio.play();
            }
        }
        
        // Khi nhac duoc bat
        audio.onplay = function() {
            _this.isPlaying = true;
            player.classList.add('playing');
            cdThumbAnimatetion.play();
        }

        // Khi nhac bi tat
        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove('playing');
            cdThumbAnimatetion.pause();
        }
        
        //===================Xu li khi tua video=========================================================

        // Khi tien do bai hat duoc thay doi
        audio.ontimeupdate = function() {
            if(audio.duration) {
               const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
               progress.value = progressPercent;
            }
        }

        // Xu li van de khi ta giu lai nut tua trong khi video dang chay
        progress.onchange = function(e) {
            audio.currentTime = progress.value / 100 * audio.duration;
        }

        progress.addEventListener('mousedown' ,function(e) {
            audio.pause();
        })
        
        progress.addEventListener('mouseup', function(){
            audio.currentTime = progress.value / 100 * audio.duration;
            audio.play();
        })

        //=========================Xu li khi thay doi am luong bai hat theo 2 cach , cach 1 nut, cach 2 thay doi tren thanh==============

        // Khi giam am luong
        decreaseVolum.onclick = function(e) {
           if(volumee.value >= 1) volumee.value--; 
           audio.volume = volumee.value / 100;
        }

        // Khi tang am luong
        increaseVolum.onclick = function(e) {
            if(volumee.value <= 99) volumee.value++;
            audio.volume = volumee.value / 100;
        }

        // Xu li khi thay doi ngay tren thanh volume cach 2
        volumee.onchange = function(e){
            audio.volume = e.target.value / 100;
        }

        //=========================Xu li next toi bai hat tiep theo hoac quay lui ve bai hat sau do=================================

        // Xu li khi next bai tiep theo
        playNext.onclick = function() {
            _this.nextSong();
            audio.play();
            _this.scrollToActive();
        }

        // Xu li khi prev bai truoc do
        playPrev.onclick = function() {
            _this.prevSong();
            audio.play();
            _this.scrollToActive();
        }

        // Xu li khi random bai hat
        playRandom.onclick = function() {
            playRandom.classList.toggle('active');
            if(playRandom.classList.contains('active')) {
                _this.isRandom = true;
            }
            else _this.isRandom = false;
            _this.setConfig('isRandom', _this.isRandom);
        }
        
        // Xu li next song khi audio ended
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play();
            }
            else{
                playNext.click();
            }
        }

        //Xu li repeat bai hat khi ended
        playRepeat.onclick = function() {
            playRepeat.classList.toggle('active');
            if(playRepeat.classList.contains('active')) {
                _this.isRepeat = true;
            }
            else _this.isRepeat = false;
            _this.setConfig('isRepeat', _this.isRepeat);

        }

        //========================Xu li khi F5 reload lai page===============================================
        window.onbeforeunload = function(e) {
            _this.setConfig('currentIndex',_this.currentIndex);
        }

    },
    nextSong: function() {
        const songCurrentActive = $(`#data-index-${this.currentIndex}`);
        songCurrentActive.classList.toggle('active');
        if(this.isRandom){
            let newIndex = this.currentIndex;
            do {
                newIndex = Math.floor(Math.random()*this.songs.length);
            }
            while(this.songPlayed.find(index => index === newIndex)!== undefined);
            this.currentIndex = newIndex;
        }
        else{
            this.currentIndex += 1;
            if(this.currentIndex >= this.songs.length) this.currentIndex = 0;
        }
        if(songCurrentActive.classList.contains('active')) songCurrentActive.classList.toggle('active');
        this.loadCurrentSong();
    },
    prevSong: function() {
        const songCurrentActive = $(`#data-index-${this.currentIndex}`);
        songCurrentActive.classList.toggle('active');
        if(this.isRandom){
            let newIndex = this.currentIndex;
            do {
                newIndex = Math.floor(Math.random()*this.songs.length);
            }
            while(this.songPlayed.find(index => index === newIndex));
            this.currentIndex = newIndex;
        }
        else {
            this.currentIndex -=1;
            if(this.currentIndex < 0) this.currentIndex = this.songs.length-1;
        }
        if(songCurrentActive.classList.contains('active')) songCurrentActive.classList.toggle('active');
        this.loadCurrentSong();
    },
    scrollToActive: function() {
        setTimeout(()=>{
            $('.song.active').scrollIntoView({
                behavior: "smooth", 
                block: "nearest", 
            })
        },500)
    },
    selectSongPlay: function() {
        const _this = this;
        playlist.onclick = function(e) {
            if(e.target.closest('.song:not(.active)') || e.target.closest('.option')) {
                if(e.target.closest('.option')){
                    
                }
                else {
                    const songCurrentActive = $(`#data-index-${_this.currentIndex}`);
                    songCurrentActive.classList.toggle('active');
                   _this.currentIndex = e.target.closest('.song:not(.active)').dataset.index;
                   _this.loadCurrentSong();
                   audio.play();
                }
            }
        }
    },
    loadConfig: function() {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
        this.currentIndex =this.config.currentIndex;
    },
    loadCurrentSong: function() {
        this.songPlayed.push(this.currentIndex);
        if(this.songPlayed.length === this.songs.length) this.songPlayed = [];
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.img}')`;
        audio.src = this.currentSong.path;
        const songCurrentActive = $(`#data-index-${this.currentIndex}`);
        songCurrentActive.classList.add('active');
    },
    star: function() {

        // gan cau hinh tu config vao ung dung
        this.loadConfig();

        // dinh nghia cac thuoc tinh cho object(lay ra cai bai hat hien tai, .......)
        this.defineProperties();

        // in ra danh sach bai hat
        this.render();

        // tai thong tin bai hat vao UI
        this.loadCurrentSong();

        // lang nghe va xu li cac su kien
        this.handleEvents();

        //Lang nghe 1 bai hat khi chon tu danh sach
        this.selectSongPlay();

    },
}

App.star();
