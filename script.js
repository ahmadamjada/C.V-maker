const API_KEY = 'AIzaSyAkoDjqZOIBgwhAMrY6HfLyVqN7wNLcYsg';
const endpoint = 'https://generativelanguage.googleapis.com/v1beta2/models/gemini/text-to-image:generate';

generateImageBtn.addEventListener('click', async () => {
    const prompt = textPrompt.value.trim();
    if (!prompt) {
        alert('Please enter a text prompt!');
        return;
    }

    generatedImage.innerHTML = '<p class="text-center text-gray-600">Generating your image... Please wait.</p>';

    try {
        const response = await fetch(`${endpoint}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();

        if (data && data.imageUrl) {
            generatedImage.innerHTML = `<img src="${data.imageUrl}" alt="Generated Image" class="max-w-full mx-auto mt-4">`;
        } else {
            generatedImage.innerHTML = '<p class="text-center text-red-600">Failed to generate an image. Please try again.</p>';
        }
    } catch (error) {
        console.error('Error generating image:', error);
        generatedImage.innerHTML = '<p class="text-center text-red-600">An error occurred while generating the image. Please try again.</p>';
    }
});
