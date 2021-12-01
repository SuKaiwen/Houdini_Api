class Dots {
    static get inputProperties(){
        return [
            '--circle-color',
            '--circle-size',
            '--circle-spacing'
        ];
    }

    // ctx = context
    // geometry = width/height of element
    // properties = css style map
    paint(ctx, geomerty, properties){
        console.log(properties);
    }
}