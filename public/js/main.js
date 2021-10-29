const podHandler = () => {
    window.location = "/api/pod/allpodpost"
};
document.querySelector("#podPostLink").addEventListener("click", podHandler);

const projectHandler = () => {
    window.location = "/api/pod/allprojectpost"
}

document.querySelector("#projectPostLink").addEventListener("click", projectHandler);

