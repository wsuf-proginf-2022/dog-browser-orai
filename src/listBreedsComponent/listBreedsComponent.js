import '../css/listBreedsComponent.css';

class ListBreeds {
  constructor() {
    this.render();
  }

  async getFullList() {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    if (!response.ok) {
      throw new Error('API response error');
    }
    const data = await response.json();
    return data.message;
  }

  render() {
    const button = document.createElement('button');
    button.classList.add('list-button');
    button.textContent = 'List Breeds';
    button.addEventListener('click', () => {
      this.getFullList().then((breedList) => {
        console.log(breedList);
      });
    });
    document.querySelector('#header').appendChild(button);
  }
}

export default ListBreeds;
