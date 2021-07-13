# Kubernetes

This project uses skaffold (https://skaffold.dev/) to handle the creation of the image
and deployment of the k8s assets.

Before doing the deployment make sure that you have skaffold on your env, to install it
follow the instructions here https://skaffold.dev/docs/install/


# Deploy App

To deploy the app, go to the kubernetes folder and run the following command:

```
skaffold run -p local --port-forward
```

the app should be accessible on `http://localhost:3000`

To delete the app run

```
skaffold delete
```