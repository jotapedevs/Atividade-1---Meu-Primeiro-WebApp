
async function getDogImageByBreed(breed) {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Breed not found');
        }
        const data = await response.json();
        document.getElementById('dogImage').src = data.message;
    } catch (error) {
        console.error('Error fetching the dog image:', error);
        document.getElementById('dogImage').alt = 'Image not available';
        document.getElementById('dogImage').src = ''; 
    }
}


function searchDogByBreed() {
    const breed = document.getElementById('breedInput').value.toLowerCase();
    if (breed.trim() !== '') {
        getDogImageByBreed(breed);
    }
}
