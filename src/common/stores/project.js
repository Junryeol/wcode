import { action, observable, decorate } from 'mobx';

class ProjectStore {
    
    loading = false;
    
    name = '';
    
    path = '';
    
    content = {};

    isLoading(state) {
        this.loading = Boolean(state);
    }

    load({ name, path, files, folders }) {
        this.name = name;
        this.path = path;
        this.content = { files, folders };
    }
    
    unload() {
        this.name = '';
        this.path = '';
        this.content = {};
    }

}

decorate(ProjectStore, {
    loading: observable,
    name: observable,
    path: observable,
    content: observable,

    isLoading: action,
    load: action,
    unload: action
});

export default new ProjectStore();