export class Map {
    constructor (coords){
        this.render(coords);
    }

    render(coordinate){
        if(!google){
            alert('Could not library. Try again later...');
            return;
        }
        const map = new google.maps.Map(document.getElementById('map'), {
            center: coordinate,
            zoom: 8
        })

        new google.maps.Marker({
            position: coordinate,
            map: map
        })
    }
}