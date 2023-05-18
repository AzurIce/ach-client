package com.tauri.ach_client

import app.tauri.plugin.PluginManager

class MainActivity : TauriActivity() {
  var pluginManager: PluginManager = PluginManager(this)
}
