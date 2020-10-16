var game = new Phaser.Game(550, 450, Phaser.CANVAS , 'gioco2', { preload: preload, create: create, update: update, },true);

function preload() {

    game.load.bitmapFont('carrier_command', 'fonts/bitmapFonts/carrier_command.png', 'fonts/bitmapFonts/carrier_command.xml');
    game.stage.backgroundColor = '#85b5e1';

    //game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';


    game.load.image('ciotto2','./sfondociotto.png');
    game.load.image('casa','./casa.png');
    game.load.image('casa2','./casa.png');
    game.load.image('botte','./BOTTE2.png');
    game.load.image('botte2','./BOTTE2.png');
    game.load.image('botte3','./BOTTE2.png');
    game.load.image('carro','./carro.png');
    game.load.image('carro2','./carro.png');
    game.load.image('birraioalto','./birraioalto.png')
    game.load.image('player', './bombardo dallalto.png');
    game.load.image('player1','./bombardodx.png');
    game.load.image('player2','./bombardogiu.png');
    game.load.image('player3','./bombardoleft.png');
    game.load.image('bancarella','./bancarella.png');
    game.load.image('ombralto','./ombrellaioalto.png');
    game.load.image('panalto','./panalto.png');
    game.load.image('sartalto','./sartalto.png');

}

var player;
var sfondo;
var ciotto2;
var casa;
var botte;
var carro;
var casa2;
var botte2;
var botte3;
var carro2;
var birraioalto;
var player1;
var player2;
var bancarella;
var ombralto;
var panalto;
var sartalto;
var nani;

function create() {




        ciotto2 = game.add.sprite(0,0, 'ciotto2');
        ciotto2.scale.setTo(1,1);

        player = game.add.sprite(20, 250, 'player');
        player.scale.setTo(0.17,0.17);
        game.physics.arcade.enable(player);

        player.body.collideWorldBounds = true;

        player1 = game.add.sprite(20, 250, 'player1');
        player1.scale.setTo(0.17,0.17);
        game.physics.arcade.enable(player1);
        player1.alpha=0;

        player1.body.collideWorldBounds = true;

        player2 = game.add.sprite(20, 250, 'player2');
        player2.scale.setTo(0.17,0.17);
        game.physics.arcade.enable(player2);
        player2.alpha=0;

        player2.body.collideWorldBounds = true;

        player3 = game.add.sprite(20, 250, 'player3');
        player3.scale.setTo(0.17,0.17);
        game.physics.arcade.enable(player3);
        player3.alpha=0;

        player3.body.collideWorldBounds = true;

        casa2 = game.add.sprite(5,75, 'casa2');
        casa2.scale.setTo(0.32,0.32);
        game.physics.enable( [ casa2, player ], Phaser.Physics.ARCADE);
        casa2.body.immovable = true;
        casa = game.add.sprite(290,150, 'casa');
        casa.scale.setTo(0.32,0.32);
        game.physics.enable( [ casa, player ], Phaser.Physics.ARCADE);
        casa.body.immovable = true;

        botte2 = game.add.sprite(100,290, 'botte2');
        botte2.scale.setTo(0.2,0.2);
        game.physics.enable( [ botte2, player ], Phaser.Physics.ARCADE);
        botte2.body.immovable = true;
        botte = game.add.sprite(360,15, 'botte');
        botte.scale.setTo(0.2,0.2);
        game.physics.enable( [ botte, player ], Phaser.Physics.ARCADE);
        botte.body.immovable = true;
        botte3 = game.add.sprite(250,370, 'botte3');
        botte3.scale.setTo(0.2,0.2);
        game.physics.enable( [ botte3, player ], Phaser.Physics.ARCADE);
        botte3.body.immovable = true;

        carro2 = game.add.sprite(200,90, 'carro2');
        carro2.scale.setTo(0.25,0.25);
        game.physics.enable( [ carro2, player ], Phaser.Physics.ARCADE);
        carro2.body.immovable = true;
        carro = game.add.sprite(400,230, 'carro');
        carro.scale.setTo(0.25,0.25);
        game.physics.enable( [ carro, player ], Phaser.Physics.ARCADE);
        carro.body.immovable = true;

        birraioalto = game.add.sprite(12,12,'birraioalto');
        birraioalto.scale.setTo(0.14,0.14);
        game.physics.enable( [ birraioalto, player ], Phaser.Physics.ARCADE);

        ombralto = game.add.sprite(280,300,'ombralto');
        ombralto.scale.setTo(0.14,0.14);
        game.physics.enable( [ ombralto, player ], Phaser.Physics.ARCADE);

        panalto = game.add.sprite(180,350,'panalto');
        panalto.scale.setTo(0.17,0.17);
        game.physics.enable( [ panalto, player ], Phaser.Physics.ARCADE);

        sartalto = game.add.sprite(430,15,'sartalto');
        sartalto.scale.setTo(0.14,0.14);
        game.physics.enable( [ sartalto, player ], Phaser.Physics.ARCADE);

        cursors = game.input.keyboard.createCursorKeys();

        bancarella = game.add.sprite(180,230,'bancarella');
        bancarella.scale.setTo(0.23,0.23);
        game.physics.enable( [ bancarella, player ], Phaser.Physics.ARCADE);
        bancarella.body.immovable = true;

        speed = 250;
        nani = 4;

}

function update () {

    game.physics.arcade.collide(player,casa);game.physics.arcade.collide(player1,casa);game.physics.arcade.collide(player2,casa);game.physics.arcade.collide(player3,casa);
    game.physics.arcade.collide(player,bancarella);game.physics.arcade.collide(player1,bancarella);game.physics.arcade.collide(player2,bancarella);game.physics.arcade.collide(player3,bancarella);
    game.physics.arcade.collide(player, casa2);game.physics.arcade.collide(player1, casa2);game.physics.arcade.collide(player2, casa2);game.physics.arcade.collide(player3, casa2);
    game.physics.arcade.collide(player,botte);game.physics.arcade.collide(player1,botte);game.physics.arcade.collide(player2,botte);game.physics.arcade.collide(player3,botte);
    game.physics.arcade.collide(player,botte2);game.physics.arcade.collide(player1,botte2);game.physics.arcade.collide(player2,botte2);game.physics.arcade.collide(player3,botte2);
    game.physics.arcade.collide(player,botte3);game.physics.arcade.collide(player1,botte3);game.physics.arcade.collide(player2,botte3);game.physics.arcade.collide(player3,botte3);
    game.physics.arcade.collide(player,carro);game.physics.arcade.collide(player1,carro);game.physics.arcade.collide(player2,carro);game.physics.arcade.collide(player3,carro);
    game.physics.arcade.collide(player,carro2);game.physics.arcade.collide(player1,carro2);game.physics.arcade.collide(player2,carro2);game.physics.arcade.collide(player3,carro2);
    game.physics.arcade.collide(player,birraioalto,killbirraio);game.physics.arcade.collide(player1,birraioalto,killbirraio);game.physics.arcade.collide(player2,birraioalto,killbirraio);game.physics.arcade.collide(player3,birraioalto,killbirraio);
    game.physics.arcade.collide(player,ombralto,killombralto);game.physics.arcade.collide(player1,ombralto,killombralto);game.physics.arcade.collide(player2,ombralto,killombralto);game.physics.arcade.collide(player3,ombralto,killombralto);
    game.physics.arcade.collide(player,sartalto,killsartalto);game.physics.arcade.collide(player1,sartalto,killsartalto);game.physics.arcade.collide(player2,sartalto,killsartalto);game.physics.arcade.collide(player3,sartalto,killsartalto);
    game.physics.arcade.collide(player,panalto,killpanalto);game.physics.arcade.collide(player1,panalto,killpanalto);game.physics.arcade.collide(player2,panalto,killpanalto);game.physics.arcade.collide(player3,panalto,killpanalto);

    player.body.velocity.x = 0;
    player.body.velocity.y=0;
    player1.body.velocity.x = 0;
    player1.body.velocity.y=0;
    player2.body.velocity.x = 0;
    player2.body.velocity.y=0;
    player3.body.velocity.x = 0;
    player3.body.velocity.y=0;

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -speed;
        player1.body.velocity.x = -speed;
        player2.body.velocity.x = -speed;
        player3.body.velocity.x = -speed;
        player.alpha=0; player1.alpha=0;player2.alpha=0;player3.alpha=1;
          sparisci();
    }
    else if (cursors.right.isDown)
    {
      player.body.velocity.x = speed;
      player1.body.velocity.x=speed;
      player2.body.velocity.x=speed;
      player3.body.velocity.x=speed;
      player.alpha=0; player1.alpha=1;player2.alpha=0;player3.alpha=0;
        sparisci();
    }

    else if(cursors.up.isDown)
    {
      player.body.velocity.y=-speed;
      player1.body.velocity.y=-speed;
      player2.body.velocity.y=-speed;
      player3.body.velocity.y=-speed;
      player.alpha=1; player1.alpha=0;player2.alpha=0;player3.alpha=0;
      sparisci();
    }
    else if(cursors.down.isDown)
    {
      player.body.velocity.y = speed;
      player1.body.velocity.y = speed;
      player2.body.velocity.y = speed;
      player3.body.velocity.y = speed;
      player.alpha=0; player2.alpha=1; player1.alpha=0;player3.alpha=0;
        sparisci();
    }
}

function killbirraio(player,birraioalto){
  birraioalto.kill(); nani = nani -1;apparibirra();
if(nani==0){primavinto()};
}
function killombralto(player, ombralto){
  ombralto.kill(); nani = nani -1;appariombraio();
if(nani==0){primavinto()};
}
function killsartalto(player,sartalto){
  sartalto.kill(); nani = nani -1; apparisarta();
if(nani==0){primavinto()};
}
function killpanalto(player,panalto){
  panalto.kill(); nani = nani -1; apparipane();
if(nani==0){primavinto()};
}
