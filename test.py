import torch
from torchvision import models, transforms
from PIL import Image
import numpy as np
import torch.nn as nn
from IPython.display import display

# Load the saved model
model = models.resnet18(pretrained=True)
model.fc = nn.Linear(model.fc.in_features, 1000)  # Adjust to match the original model's output units
model.load_state_dict(torch.load(r'C:\Users\Shanuka\color_classification_model.pickle', map_location=torch.device('cpu')))
model.eval()

# Define the class names
class_names = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

# Load and preprocess the unseen image
image_path = r'C:\Users\Shanuka\Desktop\Color blindness-detection\basedata\testing\7\0.jpg'  # Replace with the path to your image
try:
    image = Image.open(image_path)
except Exception as e:
    print("Error loading the image:", e)
    exit()

preprocess = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])
input_tensor = preprocess(image)
input_batch = input_tensor.unsqueeze(0)  # Add a batch dimension

# Perform inference
with torch.no_grad():
    output = model(input_batch)

# Get the predicted class
_, predicted_class = output.max(1)
predicted_class_name = class_names[predicted_class.item()]

print(f'The predicted class is: {predicted_class_name}')


# Display the image
display(image)
