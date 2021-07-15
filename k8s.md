# Kubernetes

This project uses skaffold (https://skaffold.dev/) and buildpacks (https://buildpacks.io/)
to handle the creation of the image and deployment of the kubernetes resources.

Before doing the deployment make sure that you have skaffold and buildpacks on your env, to install them
follow the instructions in:

 - https://skaffold.dev/docs/install/
 - https://buildpacks.io/docs/tools/pack/

# Deploy App

To deploy the app, go to the kubernetes folder and run the following command:

```
skaffold run -p local --port-forward
```

look for the command output, it should the tell you the port that is listening, so you can check the
app on `http://localhost:<port>`

To delete the app run

```
skaffold delete
```