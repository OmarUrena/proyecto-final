# Project Name

This project aims to create two webs applications that utilizes various search and sorting algorithms. The application is designed to run on a Kubernetes cluster, and it consists of two pods that each contain an HTML form and relevant algorithms.

## Table of Contents

- [POD1](#pod1)
- [POD2](#pod2)
- [Kubernetes Configuration](#kubernetes-configuration)

## POD1

POD1 is one of the two pods that will be running on the Kubernetes cluster.

This pod will contain an HTML form that will allow the user to utilize two search algorithms: Linear Search and Jump Search.

### Files

The following files are included in POD1:

- `app.js`: This is the Node.js app.
- `functions.js`: LinearSearch and JumpSearch algorithms.
- `public/index.html`: This is the HTML form.
- `public/script.js`: API calls.
- `public/style.css`: CSS file for the HTML form.

## POD2

POD2 is the second of the two pods that will be running on the Kubernetes cluster.

This pod will contain an HTML form that will allow the user to utilize two search algorithms: Bubble Sort and Binary Search.

### Files

The following files are included in POD2:

- `app.js`: This is the Node.js app.
- `functions.js`: Bubble Sort and Binary Search algorithms.
- `public/index.html`: This is the HTML form.
- `public/script.js`: API calls.
- `public/style.css`: CSS file for the HTML form.

## Kubernetes Configuration

The following files will be used to configure the Kubernetes cluster to run the pods:

- `pod1.yaml`
- `pod2.yaml`


