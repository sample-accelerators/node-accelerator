# Kubernetes resources

it also comes with the option to include a kubernetes deployment. 
To deploy it go to the kubernetes folder and run `kubectl create -f node-accelerator.yml`
this will create a deployment and a `NodePort` service listening on port `30686`.

# Minikube
if you deploy in a minikube instance it should be available on `http://localhost:30686`.

# Kind

If you deploy the app in a `kind` you'll need to add a `extraPortMapping` to your kind cluster definition file, _I.E._

```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  extraPortMappings:
  - containerPort: 30686
    hostPort: 30686
    protocol: TCP
```

For more information go to https://kind.sigs.k8s.io/docs/user/configuration/#extra-port-mappings.
