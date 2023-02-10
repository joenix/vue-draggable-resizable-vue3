// Use Component
import VueDraggableResizableComponent from './src/index.vue';

// Declare Install for `app.use`
function install(app) {
  // If is Installed
  if (install.installed) {
    return;
  }

  // is Install
  install.installed = true;

  // Register Component name `VueDraggableResizable`
  app.component('VueDraggableResizable', VueDraggableResizableComponent);
}

// Export as Plugin
export const VueDraggableResizable = { install };

/**
 * Register Component in Vue2 for Async
 * ========== ========== ==========
 */

// Set Global
let Global = null;

// in Window
if (typeof window !== 'undefined') {
  Global = window;
}

// in Global
if (typeof global !== 'undefined') {
  Global = global;
}

// Set GlobalVue
let GlobalVue = Global.App || Global.Vue;

// do Register
if (GlobalVue && GlobalVue.use) {
  // Register Plugin
  GlobalVue.use(VueDraggableResizable);
}

// Export Component
export default VueDraggableResizableComponent;
