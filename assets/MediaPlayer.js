function mediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins || [];  
    this._initPlugins();
    }

    mediaPlayer.prototype._initPlugins = function(){
        const player = {
            iniciar: ()=> this.iniciar(),
            pause: () => this.pause(),
            media: this.media,
            get muted(){
                return this.media.muted;
            },

            set muted(value){
                this.media.muted = value;
            },
        };     

        this.plugins.forEach(plugin=> {
            plugin.run(player);
        });
    };

    mediaPlayer.prototype.iniciar = function(){ // en metodos prototype podemos acceder a los valores con this
        this.media.play();
    };

    mediaPlayer.prototype.pausar = function(){
        this.media.pause();
    };      

    mediaPlayer.prototype.togglePlay = function(){
        if(this.media.paused){
            this.media.play();
        }else{
            this.media.pause();
        }
    };

    mediaPlayer.prototype.mute = function(){
        this.media.muted = true;
    }
    
    mediaPlayer.prototype.unmute = function(){
        this.media.muted = false;
    }
    mediaPlayer.prototype.toggleMute = function(){
        if(this.media.muted){
            this.unmute();
        }else{
            this.mute();        }
    };

    export default mediaPlayer;