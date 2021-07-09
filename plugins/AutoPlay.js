
function AutoPlay(){}

AutoPlay.prototype.run = function(player){
    if(!player.muted){
        player.muted = true;
    }
    player.iniciar();
    
};


export default AutoPlay;
//reto añadir boton unmute a la interfaz