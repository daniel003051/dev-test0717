import { createApp } from 'vue';
import App from './App.vue';
import './index.css';


kintone.events.on('app.record.index.show', () => {
    const el = kintone.app.getHeaderSpaceElement()!
    createApp(App).mount(el);
})


