<script>
    import Infobox from './Infobox.svelte';
    import InfoboxBg from './InfoboxBg.svelte';

    let infoboxItens = [
        getInfoboxData('shopping_cart', 'bg-red', 'NEW ORDERS', 0, 125, 1000, 20, '125'),
        getInfoboxData('face', 'bg-indigo', 'NEW MEMBERS', 0, 257, 1000, 20, '257'),
        getInfoboxData('bookmark', 'bg-purple', 'BOOKMARKS', 0, 117, 1000, 20, ''),
        getInfoboxData('favorite', 'bg-deep-purple', 'LIKES', 0, 1432, 1500, 20, '')
    ];

    function getInfoboxData(ico, bgClass, text, dataFrom, dataTo, dataSpeed, dataFreshInterval, label){
        return { 
            ico: ico, 
            bgClass: bgClass,
            text: text, 
            dataFrom: dataFrom, 
            dataTo: dataTo, 
            dataSpeed: dataSpeed, 
            dataFreshInterval: dataFreshInterval, 
            label: label 
        };
    }
</script>

<div class="container-fluid">
    <!-- Counter Examples -->
    <div class="block-header">
        <h2>
            COUNTER ANIMATION
            <small>Taken from <a href="https://github.com/mhuggins/jquery-countTo" target="_blank">github.com/mhuggins/jquery-countTo</a></small>
        </h2>
    </div>

    <div class="row">
        {#each infoboxItens as item}
            <InfoboxBg model={item} />
        {/each}
    </div>
</div>

<style>

</style>
