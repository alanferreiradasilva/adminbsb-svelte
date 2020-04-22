<script>
    export let model = {
        ico: '',
        icoClass: '',
        title: '',
        label: ''
    };

    let icoCssClass = 'icon ' + model.icoClass;
</script>

<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <div class="info-box hover-zoom-effect">
        <div class={icoCssClass}>
            <i class="material-icons">{model.ico}</i>
        </div>
        <div class="content">
            <div class="text">{model.title}</div>
            <div class="number">{model.label}</div>
        </div>
    </div>
</div>

<style>

</style>
