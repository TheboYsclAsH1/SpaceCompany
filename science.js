// Research Tab

function getLab(){
	if(wood >= labWoodCost && gem >= labGemCost && metal >= labMetalCost){
		wood -= labWoodCost;
		gem -= labGemCost;
		metal -= labMetalCost;
		lab += 1;
		updateLabCost();
	}
}

function getLabT2(){
	if(wood >= labT2WoodCost && gem >= labT2GemCost && metal >= labT2MetalCost){
		wood -= labT2WoodCost;
		gem -= labT2GemCost;
		metal -= labT2MetalCost;
		labT2 += 1;
		updateLabCost();
	}
}

function getLabT3(){
	if(wood >= labT3WoodCost && gem >= labT3GemCost && metal >= labT3MetalCost){
		wood -= labT3WoodCost;
		gem -= labT3GemCost;
		metal -= labT3MetalCost;
		labT3 += 1;
		updateLabCost();
	}
}

function getLabT4(){
	if(wood >= labT4WoodCost && gem >= labT4GemCost && metal >= labT4MetalCost){
		wood -= labT4WoodCost;
		gem -= labT4GemCost;
		metal -= labT4MetalCost;
		labT4 += 1;
		updateLabCost();
	}
}

function updateLabCost(){
    labWoodCost = Math.floor(10 * Math.pow(1.1,lab));
    labGemCost = Math.floor(15 * Math.pow(1.1,lab));
    labMetalCost = Math.floor(20 * Math.pow(1.1,lab));

    labT2WoodCost = Math.floor(500 * Math.pow(1.1,labT2));
    labT2GemCost = Math.floor(200 * Math.pow(1.1,labT2));
    labT2MetalCost = Math.floor(1000 * Math.pow(1.1,labT2));

    labT3WoodCost = Math.floor(9600 * Math.pow(1.1,labT3));
    labT3GemCost = Math.floor(4700 * Math.pow(1.1,labT3));
    labT3MetalCost = Math.floor(17000 * Math.pow(1.1,labT3));

    labT4WoodCost = Math.floor(610000 * Math.pow(1.1,labT4));
    labT4GemCost = Math.floor(37000 * Math.pow(1.1,labT4));
    labT4MetalCost = Math.floor(926000 * Math.pow(1.1,labT4));
}

function unlockStorage(){
	if (Game.tech.buyTech('unlockStorage', 1)) {
		Game.statistics.add('techResearched');
		refreshResources();
		refreshResearches();
		newUnlock("resources");
	}
}

function unlockBasicEnergy(){
	if (Game.tech.buyTech('unlockBasicEnergy', 1)) {
		Game.statistics.add('techResearched');
		Game.statistics.add('resourcesUnlocked', 2);
		refreshResources();
		refreshResearches();
		newUnlock("resources");
	}
}

function unlockOil(){
	if (Game.tech.buyTech('unlockOil', 1)) {
		Game.statistics.add('techResearched');
		Game.statistics.add('resourcesUnlocked');
		refreshResources();
		refreshResearches();
		newUnlock("resources");
	}
}

function unlockSolar(){
	if (Game.tech.buyTech('unlockSolar', 1)) {
		Game.statistics.add('techResearched');
		refreshResources();
		refreshResearches();
		newUnlock("resources");
	}
}

function unlockMachines(){
	if (Game.tech.buyTech('unlockMachines', 1)) {
		Game.statistics.add('techResearched');
		refreshResources();
		refreshResearches();
		newUnlock("resources");
	}
}

function upgradeResourceTech(){
	if(science >= 300){
		science -= 300;
		pumpjackOutput *= 2;
		heavyDrillOutput *= 2;
		advancedDrillOutput *= 2;
		furnaceWoodInput *= 2;
		furnaceOutput *= 2;
		laserCutterOutput *= 2;
		document.getElementById("upgradeResourceTech").className = "hidden";
		researched.push("upgradeResourceTech");
        Game.statistics.add('techResearched');
		newUnlock("resources");
	}
}

function unlockDestruction(){
	if (Game.tech.buyTech('unlockDestruction', 1)) {
		Game.statistics.add('techResearched');
		refreshResources();
		refreshResearches();
		newUnlock("resources");
	}
}

function unlockSolarSystem(){
	if (Game.tech.buyTech('unlockSolarSystem', 1)) {
		Game.statistics.add('techResearched');
		refreshResources();
		refreshResearches();
		newUnlock("solarSystem");
		Game.notifySuccess("New Tab!", "You've unlocked the Solar System Tab!");
	}
}

function unlockRocketFuelT2(){
	if(science >= 450000){
		science -= 450000;
		document.getElementById("unlockRocketFuelT2").className = "hidden";
		document.getElementById("rocketFuelT2").className = "";
		document.getElementById("unlockRocketFuelT3").className = "";
		available.push("unlockRocketFuelT3");
		researched.push("unlockRocketFuelT2");
		resourcesUnlocked.push("rocketFuelT2");
        Game.statistics.add('techResearched');
		newUnlock("solarSystem");
	}
}

function unlockRocketFuelT3(){
	if(science >= 3200000){
		science -= 3200000;
		document.getElementById("unlockRocketFuelT3").className = "hidden";
		document.getElementById("rocketFuelT3").className = "";
		researched.push("unlockRocketFuelT3");
		resourcesUnlocked.push("rocketFuelT3");
        Game.statistics.add('techResearched');
		newUnlock("solarSystem");
	}
}

function unlockLabT2(){
	if (Game.tech.buyTech('unlockLabT2', 1)) {
        Game.statistics.add('techResearched');
		refreshResearches();
	}
}

function upgradeEngineTech(){
	if(science >= 1000){
		science -= 1000;
		document.getElementById("upgradeEngineTech").className = "hidden";
		charcoalEngineOutput = 4;
		researched.push("upgradeEngineTech");
        Game.statistics.add('techResearched');
		newUnlock("resources");
	}
}

function unlockLabT3(){
	if (Game.tech.buyTech('unlockLabT3', 1)) {
		Game.statistics.add('techResearched');
		refreshResearches();
	}
}

function upgradeSolarTech(){
	if(science >= 5000){
		science -= 5000;
		document.getElementById("upgradeSolarTech").className = "hidden";
		document.getElementById("unlockBatteries").className = "";
		solarPanelOutput = 3;
		available.push("unlockBatteries");
		researched.push("upgradeSolarTech");
        Game.statistics.add('techResearched');
		newUnlock("resources");
	}
}

function unlockBatteries(){
	if (Game.tech.buyTech('unlockBatteries', 1)) {
		Game.statistics.add('techResearched');
		refreshResources();
		refreshResearches();
		newUnlock("resources");
	}
}

function unlockBatteriesT2(){
	if (Game.tech.buyTech('unlockBatteriesT2', 1)) {
		Game.statistics.add('techResearched');
		refreshResources();
		refreshResearches();
		newUnlock("resources");
	}
}

function unlockBatteriesT3(){
	if (Game.tech.buyTech('unlockBatteriesT3', 1)) {
		Game.statistics.add('techResearched');
		refreshResources();
		refreshResearches();
		newUnlock("resources");
	}
}

function unlockBatteriesT4(){
	if (Game.tech.buyTech('unlockBatteriesT4', 1)) {
		Game.statistics.add('techResearched');
		refreshResources();
		refreshResearches();
		newUnlock("resources");
	}
}

function unlockPlasma(){
	if (Game.tech.buyTech('unlockPlasma', 1)) {
		Game.statistics.add('techResearched');
		refreshResources();
		refreshResearches();
		newUnlock("resources");
	}
}

function unlockPlasmaTier2(){
	if (Game.tech.buyTech('unlockPlasmaTier2', 1)) {
		Game.statistics.add('techResearched');
		refreshResources();
		refreshResearches();
		newUnlock("resources");
	}
}

function unlockPSU(){
	if(science >= 950000){
		science -= 950000;
		document.getElementById("unlockPSU").className = "hidden";
		document.getElementById("unlockPSUT2").className = "";
		document.getElementById("plasmaStorageUnits").className = "";
		document.getElementById("plasmaStorageBox").className = "";
		available.push("unlockPSUT2");
		researched.push("unlockPSU");
		resourcesUnlocked.push("plasmaStorageUnits", "plasmaStorageBox");
        Game.statistics.add('techResearched');
		newUnlock("resources");
	}
}

function unlockPSUT2(){
	if(science >= 37000000){
		science -= 37000000;
		document.getElementById("unlockPSUT2").className = "hidden";
		document.getElementById("plasmaStorageUnitsT2").className = "";
		researched.push("unlockPSUT2");
		resourcesUnlocked.push("plasmaStorageUnitsT2");
        Game.statistics.add('techResearched');
		newUnlock("resources");
	}
}

function unlockLabT4(){
	if (Game.tech.buyTech('unlockLabT4', 1)) {
		Game.statistics.add('techResearched');
		refreshResearches();
	}
}

function unlockEmc(){
	if (Game.tech.buyTech('unlockEMC', 1)) {
		Game.statistics.add('techResearched');
		refreshResources();
		refreshResearches();
		newUnlock("solCenter");
	}
}

function unlockMeteorite(){
	if (Game.tech.buyTech('unlockMeteorite', 1)) {
		Game.statistics.add('techResearched');
		Game.statistics.add('resourcesUnlocked');
		refreshResources();
		refreshResearches();
		newUnlock("resources");
		newUnlock("wonder");
	}
}

function unlockMeteoriteTier1(){
	if (Game.tech.buyTech('unlockMeteoriteTier1', 1)) {
		Game.statistics.add('techResearched');
		refreshResources();
		refreshResearches();
		newUnlock("resources");
	}
}

function unlockMeteoriteTier2(){
	if (Game.tech.buyTech('unlockMeteoriteTier2', 1)) {
		Game.statistics.add('techResearched');
		refreshResources();
		refreshResearches();
		newUnlock("resources");
	}
}

function unlockDyson(){
	if (Game.tech.buyTech('unlockDyson', 1)) {
		Game.statistics.add('techResearched');
		refreshResources();
		refreshResearches();
		newUnlock("solCenter");
	}
}

function unlockDysonSphere(){
	if (Game.tech.buyTech('unlockDysonSphere', 1)) {
		Game.statistics.add('techResearched');
		refreshResources();
		refreshResearches();
		newUnlock("solCenter");
	}
}

function getCost(basePrice, amount, multiplier) {
	if(!multiplier) { multiplier = 1.1; }
    return Math.floor(basePrice * Math.pow(multiplier, amount));
}

function purchaseResourceEfficiency() {
    var tech = Game.tech.getTechData('efficiencyResearch');

	var cost = getCost(tech.cost['science'], tech.current);
	if(science >= cost) {
		Game.tech.gainTech(tech.id);
        science -= cost;
	}
}

function updateResourceEfficiencyDisplay() {
    var tech = Game.tech.getTechData('efficiencyResearch');

	if(science > tech.cost['science'] || tech.current > 0) {
		tech.unlocked = true;
	}

	if(tech.unlocked === false) {
        $('#scienceResourceEfficiencyUpgrade').hide();
		return;
	} else {
        $('#scienceResourceEfficiencyUpgrade').show();
	}

	var cost = getCost(tech.cost['science'], tech.current);
	Game.settings.turnRed(science, cost, 'scienceResourceEfficiencyUpgradeCost');

	$('#scienceResourceEfficiencyUpgradeTitle').text(tech.name + " #" + (tech.current));
	$('#scienceResourceEfficiencyUpgradeCost').text(Game.settings.format(cost));
}

function purchaseEnergyEfficiency() {
    var tech = Game.tech.getTechData('energyEfficiencyResearch');

    var cost = getCost(tech.cost['science'], tech.current);
    if(science >= cost) {
        Game.tech.gainTech(tech.id);
        science -= cost;
    }
    if(tech.current == tech.maxLevel){
    	var child = document.getElementById("energyEffButton");
		child.parentNode.removeChild(child);
    }
}

function updateEnergyEfficiencyDisplay() {
    var tech = Game.tech.getTechData('energyEfficiencyResearch');

    if(tech.current >= tech.maxLevel) {
        $('#scienceEnergyEfficiencyUpgradeButton').hide();
    }

    if(science > tech.cost['science'] || tech.current > 0) {
        tech.unlocked = true;
    }

    if(tech.unlocked === false) {
        $('#scienceEnergyEfficiencyUpgrade').hide();
        return;
    } else {
        $('#scienceEnergyEfficiencyUpgrade').show();
    }

    var cost = getCost(tech.cost['science'], tech.current);
    Game.settings.turnRed(science, cost, 'scienceEnergyEfficiencyUpgradeCost');

    if(tech.current == tech.maxLevel) {
        $('#scienceEnergyEfficiencyUpgradeTitle').text(tech.name + " " + tech.maxLevel + " (MAX)");
        $('#scienceEnergyEfficiencyUpgradeCost').text("N/A");
	} else {
        $('#scienceEnergyEfficiencyUpgradeTitle').text(tech.name + " " + (tech.current) + " / " + tech.maxLevel);
        $('#scienceEnergyEfficiencyUpgradeCost').text(Game.settings.format(cost));
	}
}

function purchaseScienceEfficiency() {
    var tech = Game.tech.getTechData('scienceEfficiencyResearch');

    var cost = getCost(tech.cost['science'], tech.current);
    if(science >= cost) {
        Game.tech.gainTech(tech.id);
        science -= cost;
    }
}

function updateScienceEfficiencyDisplay() {
    var tech = Game.tech.getTechData('scienceEfficiencyResearch');

    if(science > tech.cost['science'] || tech.current > 0) {
        tech.unlocked = true;
    }

    if(tech.unlocked === false) {
        $('#scienceScienceEfficiencyUpgrade').hide();
        return;
    } else {
        $('#scienceScienceEfficiencyUpgrade').show();
    }

    var cost = getCost(tech.cost['science'], tech.current);
    Game.settings.turnRed(science, cost, 'scienceScienceEfficiencyUpgradeCost');

    $('#scienceScienceEfficiencyUpgradeTitle').text(tech.name + " #" + (tech.current));
    $('#scienceScienceEfficiencyUpgradeCost').text(Game.settings.format(cost));
}

function purchaseBatteryEfficiency() {
    var tech = Game.tech.getTechData('batteryEfficiencyResearch');

    var cost = getCost(tech.cost['science'], tech.current);
    if(science >= cost) {
        Game.tech.gainTech(tech.id);
        science -= cost;
    }
}

function updateBatteryEfficiencyDisplay() {
    var tech = Game.tech.getTechData('batteryEfficiencyResearch');

    if(science > tech.cost['science'] || tech.current > 0) {
        tech.unlocked = true;
    }

    if(tech.unlocked === false) {
        $('#scienceBatteryEfficiencyUpgrade').hide();
        return;
    } else {
        $('#scienceBatteryEfficiencyUpgrade').show();
    }

    var cost = getCost(tech.cost['science'], tech.current);
    Game.settings.turnRed(science, cost, 'scienceBatteryEfficiencyUpgradeCost');

    if(tech.current == tech.maxLevel) {
        $('#scienceBatteryEfficiencyUpgradeTitle').text(tech.name + " " + tech.maxLevel + " (MAX)");
        $('#scienceBatteryEfficiencyUpgradeCost').text("N/A");
	} else {
        $('#scienceBatteryEfficiencyUpgradeTitle').text(tech.name + " " + (tech.current) + " / " + tech.maxLevel);
        $('#scienceBatteryEfficiencyUpgradeCost').text(Game.settings.format(cost));
	}
}
