<template>
    <main class="content">
        <h2>Overview</h2>
        <div class="row">
            <div></div>
            <div class="card0">
                <div class="content">
                    <h3>Natascha Dimple - Philosophy and Ethics</h3>
                    <h4>Natascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and Ethics</h4>
                </div>
            </div>
            <div class="card1">
                <div class="content">
                    <h3>Natascha Dimple - Philosophy and Ethics</h3>
                    <h4>Natascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and Ethics</h4>
                </div>
            </div>
            <div class="card2">
                <div class="content">
                    <h3>Natascha Dimple - Philosophy and Ethics</h3>
                    <h4>Natascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and EthicsNatascha Dimple - Philosophy and Ethics</h4>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
h2{
    text-align: center;
}

.card0{
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border-radius: .25rem;
    align-items: center;

    .content{
    margin: 20px;
    background: #324955e5;
    border-radius: 30px;
    padding: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    }
}

.card1{
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border-radius: .25rem;
    align-items: center;

    .content{
    margin: 20px;
    background: #324955e5;
    border-radius: 30px;
    padding: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    }
}

.card2{
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border-radius: .25rem;
    align-items: center;

    .content{
    margin: 20px;
    background: #324955e5;
    border-radius: 30px;
    padding: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    }
}

.card0::before{
    content: "";
    position: absolute;
    width: 50%;
    border: solid #d9a459;
    left: 0px;
    top: -4.5px;
    bottom: -4.5px;
    border-width: 5px 0 5px 5px;
    border-radius: 50px 0 0 50px;
    border-top: 0;
    border-top-left-radius: 0;
}

.card1::before{
    content: "";
    position: absolute;
    width: 50%;
    border: solid #d9a459;
    right: 0;
    top: 0;
    bottom: 0;
    border-width: 5px 5px 5px 0;
    border-radius: 0 50px 50px 0;
}

.card2::before{
    content: "";
    position: absolute;
    width: 50%;
    border: solid #d9a459;
    left: 0px;
    top: -4.5px;
    bottom: -4.5px;
    border-width: 5px 0 5px 5px;
    border-radius: 50px 0 0 50px;
}
</style>