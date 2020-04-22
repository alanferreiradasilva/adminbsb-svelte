<script>
    import Infobox from './Infobox.svelte';
    import InfoboxHover from './InfoboxHover.svelte';

    function getInfoboxData(ico, icoClass, text, dataFrom, dataTo, dataSpeed, dataFreshInterval, label){
        return { 
            ico: ico, 
            icoClass: icoClass,
            text: text, 
            dataFrom: dataFrom, 
            dataTo: dataTo, 
            dataSpeed: dataSpeed, 
            dataFreshInterval: dataFreshInterval, 
            label: label 
        };
    }

    function getInfoboxHoverData(ico, icoClass, title, label){
        return {
            ico: ico,
            icoClass: icoClass,
            title: title,
            label: label
        };
    }

    let infoboxItens = [
        getInfoboxData('shopping_cart', 'bg-red', 'NEW ORDERS', 0, 125, 1000, 20, '125'),
        getInfoboxData('face', 'bg-indigo', 'NEW MEMBERS', 0, 257, 1000, 20, '257'),
        getInfoboxData('bookmark', 'bg-purple', 'BOOKMARKS', 0, 117, 1000, 20, ''),
        getInfoboxData('favorite', 'bg-deep-purple', 'LIKES', 0, 1432, 1500, 20, '')
    ];

    let infoboxHoverZoomEffects = [
        getInfoboxHoverData('email', 'bg-pink', 'MESSAGES', '15'),
        getInfoboxHoverData('devices', 'bg-blue', 'CPU USAGE', '92%'),
        getInfoboxHoverData('access_alarm', 'bg-light-blue', 'ALARM', '07:00 AM'),
        getInfoboxHoverData('gps_fixed', 'bg-cyan', 'LOCATION', 'Turkey')
    ];
</script>

<div class="container-fluid">
    <div class="block-header">
        <h2>
            COUNTER ANIMATION
            <small>Taken from <a href="https://github.com/mhuggins/jquery-countTo" target="_blank">github.com/mhuggins/jquery-countTo</a></small>
        </h2>
    </div>

    <div class="row clearfix">
        {#each infoboxItens as item}
             <Infobox 
                ico={item.ico}
                icoClass={item.icoClass}
                text={item.text}
                dataFrom={item.dataFrom}
                dataTo={item.dataTo}
                dataSpeed={item.dataSpeed}
                dataFreshInterval={item.dataFreshInterval}
                label={item.label}
                />
        {/each}
    </div>

    <div class="block-header">
        <h2>HOVER ZOOM EFFECT</h2>
    </div>
    <div class="row clearfix">
        {#each infoboxHoverZoomEffects as item}
             <InfoboxHover model={item} />
        {/each}
    </div>
</div>

<style>

</style>
