// Function to load image from URL and convert to JSON
function loadImageToJSON(imageUrl, callback) {
    // Create an image element
    var img = new Image();
    
    // Set the source of the image to the provided URL
    img.src = imageUrl;

    // When the image has loaded
    img.onload = function() {
        // Create a canvas element to draw the image
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        // Set the canvas size to match the image size
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image onto the canvas
        ctx.drawImage(img, 0, 0);

        // Get the pixel data from the canvas
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        
        // Convert the pixel data to JSON
        var jsonData = {
            width: imageData.width,
            height: imageData.height,
            data: Array.from(imageData.data)
        };

        // Invoke the callback function with the JSON data
        callback(jsonData);
    };
}

// Example usage
var imageUrl = 'https://example.com/image.jpg';

loadImageToJSON(imageUrl, function(jsonData) {
    // Use the JSON data as needed
    console.log(jsonData);
    // You can include your JavaScript code here that uses the JSON data
});