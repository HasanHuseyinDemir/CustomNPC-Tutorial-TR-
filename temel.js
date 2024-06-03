//Veri işlemleri
function get(npc,v1){
    var g=npc.getStoreddata().get(v1);
    return g
}
    
function set(npc,v1,v2){
    npc.getStoreddata().put(v1,v2)
}


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

    /*NPCnin item vermesi */
    var item = e.npc.world.createItem("minecraft:diamond", 0, 1);
    e.npc.giveItem(e.player, item);

    /*Npc Ateşe Dayanıklımı?*/e.npc.setImmuneToFire(true);
    /*Npc yansınmı? */

    e.npc.addPotionEffect(effect)//NPC'ye belirli bir iksir etkisi ekler.
    //Örnek Kullanım
    e.npc.addPotionEffect(new net.minecraft.potion.PotionEffect(net.minecraft.init.MobEffects.STRENGTH, 600, 1));
    
    /*iksir etkilerini kaldırma*/e.npc.clearPotionEffects()
    /*npc buna saldırsın */e.npc.setAttackTarget(e.player);

    /*ev pozisyonu*/e.npc.getHome();
    /*ev pozisyonu set */e.npc.setHome(xPos,yPos,zPos);
    /*NPC'nin sahibini döndürür (eğer varsa).*/e.npc.getOwner()
    /*Npc Sahibi Ayarla*/e.npc.setOwner(e.player);

    /*NPC zıplatma */e.npc.jump()

}

/*Dünya mesajı:"Merhaba dünya"*/

/*gelişmiş e.npc.getWorld()*/
