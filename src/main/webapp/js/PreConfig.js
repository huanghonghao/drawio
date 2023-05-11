/**
 * Copyright (c) 2006-2020, JGraph Ltd
 * Copyright (c) 2006-2020, draw.io AG
 */
// Overrides of global vars need to be pre-loaded
window.EXPORT_URL = 'REPLACE_WITH_YOUR_IMAGE_SERVER';
window.PLANT_URL = 'REPLACE_WITH_YOUR_PLANTUML_SERVER';
window.DRAWIO_BASE_URL = window.location.protocol + '//' + window.location.host; // Replace with path to base of deployment, e.g. https://www.example.com/folder
window.DRAWIO_VIEWER_URL = window.location.protocol + '//' + window.location.host + '/js/viewer.min.js'; // Replace your path to the viewer js, e.g. https://www.example.com/js/viewer.min.js
window.DRAWIO_LIGHTBOX_URL = window.location.protocol + '//' + window.location.host; // Replace with your lightbox URL, eg. https://www.example.com
window.DRAW_MATH_URL = 'math/es5';
window.DRAWIO_CONFIG = null; // Replace with your custom draw.io configurations. For more details, https://www.drawio.com/doc/faq/configure-diagram-editor
window.SAVE_URL = 'https://www.fastmock.site/mock/62800ac71541717de5b9eb9b2cf772fc/test/ProTable_00dc9583'
urlParams['sync'] = 'manual';
urlParams['lang'] = 'zh'; // 默认使用简体中文
urlParams['ui'] = 'min' // 设置ui布局
urlParams['gapi'] = 0  // Disables the Google integration.
urlParams['db'] = 0    // Disables the Dropbox integration.
urlParams['od'] = 0    // Disables the OneDrive integration.
urlParams['tr'] = 0    // Disables the Trello integration.
urlParams['gh'] = 0    // Disables the GitHub integration.
urlParams['gl'] = 0    // Disables the GitLab integration.
// urlParams['offline'] = 1  // 禁用所有远程存储,不包括 device 和 browser
urlParams['browser'] = 0  // 禁用本地存储作为存储位置(0)或在存储对话框中显示浏览器选项(1)。
urlParams['mode'] = 'device'  // 切换到指定模式。
urlParams['save'] = 'remote'
