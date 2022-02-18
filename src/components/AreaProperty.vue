<template>
    <div id='properties'>
        <h2>properties</h2>
        <div class="property">
            <img src="https://avatars.mds.yandex.net/i?id=aba7b672a689330c910372a22922df80-5897285-images-thumbs&n=13" alt="">
            <div class='text'>
                <h3>
                    titile
                </h3>
                <p>
                    desc
                </p>
            </div>
        </div>

         <div class="property">
            <img src="https://avatars.mds.yandex.net/i?id=aba7b672a689330c910372a22922df80-5897285-images-thumbs&n=13" alt="">
            <div class='text'>
                <h3>
                    titile
                </h3>
                <p>
                    desc
                </p>
            </div>
        </div>
         <div class="property">
            <img src="https://avatars.mds.yandex.net/i?id=aba7b672a689330c910372a22922df80-5897285-images-thumbs&n=13" alt="">
            <div class='text'>
                <h3>
                    titile
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iure non vel ipsum praesen
                </p>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    setup() {
        
    },
    name:'AreaProperty',
    data(){
        return {}
    }
}
</script>
<style >
    #properties{
        position: absolute;
        left:25px;
        padding: 10px;
        border: 2px solid rgb(31, 49, 87);
        border-radius: 20px;
        width:600px;
        background-color: rgba(255,255,255,0.6);

    }
    
    .property{
        display: flex;
        flex-direction: row;
        width:100%;
    }
    .property img{
        width:100px;
        height: 100px;
    }
    .text{
        display: flex;
        flex-direction: column;

    }
</style>