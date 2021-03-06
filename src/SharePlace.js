import { Modal } from './UI/Modal';
import { Map } from './UI/Map';

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateBtn = document.getElementById('locate-btn');

    locateBtn.addEventListener('click', this.locateBtnHandler.bind(this));
    addressForm.addEventListener('submit', this.findaddressHandler.bind(this));
  }
  selectPlace(coordinate) {
    if (this.map) {
      this.map.render(coordinate);
    } else {
      this.map = new Map(coordinate);
    }
  }
  locateBtnHandler() {
    if (!navigator.geolocation) {
      alert('Location feature is not available in your browser!!');
      return;
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loacating your location, pls wait....'
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      (success) => {
        modal.hide();
        const coordinate = {
          lat: success.coords.latitude,
          lng: success.coords.longitude,
        };
        this.selectPlace(coordinate);
      },
      (error) => {
        modal.hide();
        alert('Unfortunatly failed to locate your location!');
      }
    );
  }

  findaddressHandler() {}
}

const placeFinder = new PlaceFinder();
