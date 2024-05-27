# Pneumonia Prediction Utility

By: Tyler Haisman

## Overview

My pneumonia prediction utility utilizes deep learning models to analyze chest X-ray images and predict whether pneumonia is present and, if so, whether it is bacterial or viral in nature.

## Technology Stack

### Frontend:

- Framework: Next.js (React)
- Styling: Tailwind CSS
- Language: TypeScript

### Backend:

- Framework: Django (Python)
- Deep Learning Library: TensorFlow Keras

## Models

### 1. Chest X-ray Detection Model:

- This model determines whether the image is a chest X-ray or not.
- Trained on nearly 2000 chest X-ray images.
- Utilizes a convolutional neural network (CNN) architecture.

### 2. Pneumonia Classification Model:

- This model identifies if pneumonia is present and categorizes it as bacterial or viral.
- Trained on over 4000 chest X-ray images depicting normal, bacterial pneumonia, and viral pneumonia cases.
- Utilizes a CNN architecture.

## Data Sources

### Chest X-Ray Images (Pneumonia) Dataset:

- Kaggle Dataset: [Chest X-Ray Images (Pneumonia)](https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia)
- Contains chest X-ray images depicting normal, bacterial pneumonia, and viral pneumonia cases.
- Kermany, Daniel; Zhang, Kang; Goldbaum, Michael (2018), “Labeled Optical Coherence Tomography (OCT) and Chest X-Ray Images for Classification”, Mendeley Data, V2, doi: 10.17632/rscbjbr9sj.2

### Random Images Dataset:

- Kaggle Dataset: [Unsplash Random Images Collection](https://www.kaggle.com/lprdosmil/unsplash-random-images-collection)
- Used for negative samples (i.e., images that are not chest X-rays).

## Workflow

### 1. Image Verification:

- The API first verifies if the uploaded image is a chest X-ray using the Chest X-ray Detection Model.

### 2. Pneumonia Prediction:

- If the image is confirmed to be a chest X-ray, it is sent to the Pneumonia Classification Model.
- The model predicts whether pneumonia is present and its type (bacterial or viral).

### 3. Result Display:

- The prediction results are sent back to the frontend for display.
- Users can then interpret the prediction and act accordingly.

## Future Directions

### Enhanced Model Accuracy:

Continuous training and fine-tuning of models to improve accuracy and robustness.

### Expansion of Dataset:

Incorporating more diverse and extensive datasets to capture a wider range of cases and improve generalization.

## Run Locally

### Client

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).\

First, install all dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Server

This is a Python DJANGO project.\

First, install all dependencies:\
Python 2:

```
pip install -r requirements.txt
```

Python 3:

```
pip3 install -r requirements.txt
```

Then, start the server:

```
python manage.py runserver
```

By default, the server will start and run on [http://localhost:8000](http://localhost:8000)\

To save all dependencies in requirements.txt,

```
pip freeze > requirements.txt

```

## About the Author

This project was developed by Tyler Haisman, a computer science student interested in medicine and aspiring to work in technology. For inquiries or collaborations, please contact Tyler via [tylerhaisman.com](https://tylerhaisman.com).

© 2024 Tyler Haisman
