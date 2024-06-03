//NPC işlemleri
function interact(e){
    /*Npc mesajı*/  e.npc.say("Merhaba!")
    /*Oyuncu ismi*/ e.npc.name|e.player.name ||e.npc.getName()//...
    /*Npc ismi değiştirmek */ e.npc.setName("İsim")
    /*Can değeri almak */   e.npc.getHealth() | e.player.getHealth()
    /*Can değeri değiştirmek */ e.npc.setHealth(20)
    /*Max Can */ e.npc.setMaxHealth(20)
    /*Loncasının ismi*/ e.npc.getFaction().name;
    /*Lonca Değişimi*/ e.npc.setFaction(1); //Loncanın idsi
    
    /*Konum değeri almak*/ 
    var pos = e.npc.getPosition();
    var x = pos.x;
    var y = pos.y;
    var z = pos.z;

    /*NPC Pozisyonu*/e.npc.setPosition(100, 64, 200);
    /*npc yi yok eder*/e.npc.despawn();
    /*npc canlımı*/e.npc.isAlive();
}

/*Dünya mesajı:"Merhaba dünya"*/

/*gelişmiş e.npc.getWorld()*/
