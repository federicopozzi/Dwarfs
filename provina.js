
var game = new Phaser.Game(1000, 700, Phaser.CANVAS, 'gioco', { preload: preload, create: create, update: update  },true);

function preload() {

    game.load.bitmapFont('carrier_command', 'fonts/bitmapFonts/carrier_command.png', 'fonts/bitmapFonts/carrier_command.xml');
    game.stage.backgroundColor = '#85b5e1';


    //game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';


    game.load.image('boccale', './BOCCALE.png');
    game.load.image('ombrello', './OMBRELLO.png');
    game.load.image('forbici', './FORBICI.png');
    game.load.image('pane', './BAGUETTE.png');

    game.load.image('birraio','./BIRRAIO SENZA BOCCALE.png');
    game.load.image('birraio_ill','./BIRRAIO CON BOCCALE.png');

    game.load.image('ombrellaio','./OMBRELLAIO SENZA OMBRELLO.png');
    game.load.image('ombrellaio_ill','./OMBRELLAIO CON OMBRELLO.png');

    game.load.image('sarto','./SARTA SENZA FORBICI.png');
    game.load.image('sarto_ill','./SARTA CON FORBICI.png');

    game.load.image('panett','./PANETTIERE SENZA PANO.png');
    game.load.image('panett_ill','./PANETTIERE CON PANO.png');

    game.load.image('sfondo','./pergamena sola.png')
    game.load.image('sotto','./sotto_oggetti.png')

}

var ogg_rimasti;
var boccale;
var ombrello;
var forbici;
var ogg_pane;
var birraio;
var birraio_ill;
var ombrellaio;
var ombrellaio_ill;
var sarto;
var sarto_ill;
var panett;
var panett_ill;
var pane;
var sfondo;
var sotto;

function create() {



        sotto = game.add.sprite(237,420,'sotto');
        sotto.scale.setTo(0.2,0.2);

        birraio = game.add.sprite(100,160, 'birraio');
        birraio.scale.setTo(0.5,0.5);
        birraio_ill = game.add.sprite(100,160,'birraio_ill');
        birraio_ill.scale.setTo(0.5,0.5);
        birraio_ill.alpha=0;

        ombrellaio = game.add.sprite(337.75,160, 'ombrellaio');
        ombrellaio.scale.setTo(0.5,0.5);
        ombrellaio_ill = game.add.sprite(337.75,160,'ombrellaio_ill');
        ombrellaio_ill.scale.setTo(0.5,0.5);
        ombrellaio_ill.alpha=0;

        sarto = game.add.sprite(558.5,160, 'sarto');
        sarto.scale.setTo(0.51,0.51);
        sarto_ill = game.add.sprite(558.5,160,'sarto_ill');
        sarto_ill.scale.setTo(0.51,0.51);
        sarto_ill.alpha=0;

        panett = game.add.sprite(740,160, 'panett');
        panett.scale.setTo(0.5,0.5);
        panett_ill = game.add.sprite(740,160,'panett_ill');
        panett_ill.scale.setTo(0.5,0.5)
        panett_ill.alpha=0;

        boccale = game.add.sprite(599,440, 'boccale');
        boccale.scale.setTo(0.38,0.38);
        boccale.inputEnabled = true;
        boccale.input.enableDrag(true);
        boccale.events.onDragStop.add(onDragStop);

        ombrello = game.add.sprite(303,430, 'ombrello');
        ombrello.scale.setTo(0.28,0.28);
        ombrello.inputEnabled = true;
        ombrello.input.enableDrag(true);
        ombrello.events.onDragStop.add(onDragStop1);

        forbici = game.add.sprite(483,450, 'forbici');
        forbici.scale.setTo(0.3,0.3);
        forbici.inputEnabled = true;
        forbici.input.enableDrag(true);
        forbici.events.onDragStop.add(onDragStop2);

        pane = game.add.sprite(388,437, 'pane');
        pane.scale.setTo(0.25,0.25);
        pane.inputEnabled = true;
        pane.input.enableDrag(true);
        pane.events.onDragStop.add(onDragStop3);

        ogg_rimasti = 4;


function onDragStop(boccale,pointer){
  if(pointer.x<200 & pointer.y<350){
    boccale.inputEnabled = false;
    boccale.input.enableDrag(false);
    birraio_ill.alpha=1;
    birraio.alpha=0;
    boccale.alpha=0;
    ogg_rimasti = ogg_rimasti -1;
      if(ogg_rimasti == 0){primavinto()}}
  else{boccale.position.x=599;boccale.position.y=440;}
}

function onDragStop1(ombrello,pointer){
if(pointer.x<500 & pointer.y<350){
  ombrello.inputEnabled = false;
  ombrello.input.enableDrag(false);
  ombrellaio_ill.alpha = 1;
  ombrellaio.alpha=0;
  ombrello.alpha=0;
  ogg_rimasti = ogg_rimasti -1;
    if(ogg_rimasti == 0){primavinto()}}
  else{ombrello.position.x=303; ombrello.position.y=430;}
}
}

function onDragStop2(forbici,pointer){
if(pointer.x>500 & pointer.x<750 & pointer.y<350){
  forbici.inputEnabled = false;
  forbici.input.enableDrag(false);
  forbici.alpha=0;
  sarto_ill.alpha=1;
  sarto.alpha=0;
  ogg_rimasti = ogg_rimasti -1;
    if(ogg_rimasti == 0){primavinto()}}
  else{forbici.position.x=483; forbici.position.y=450}
}

function onDragStop3(pane,pointer){
  if(pointer.x>800 & pointer.y<350){
    pane.inputEnabled = false;
    pane.input.enableDrag(false);
    panett_ill.alpha=1;
    panett.alpha=0;
    pane.alpha=0;
    ogg_rimasti = ogg_rimasti - 1;
      if(ogg_rimasti == 0){primavinto()}}
    else{pane.position.x=388; pane.position.y=437}
}


function update () {
}
