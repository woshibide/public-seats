# 3D Cloud Presets System

comprehensive guide to the presets management system for the 3d-cloud visualization tool.

## overview

the presets system allows you to save, load, and manage complete parameter configurations using browser localStorage. this enables you to:

- save your favorite visual configurations
- share presets with others via json export/import
- quickly switch between different artistic styles
- preserve your work across browser sessions

## architecture

### files

- **presets.js**: core `PresetManager` class handling all preset operations
- **ui.js**: gui integration and user interaction logic
- **localStorage**: browser storage for persistent preset data

### operating modes

the system uses operating modes to ensure robust state management:

- **idle**: ready for operations
- **saving**: currently saving a preset
- **loading**: currently loading a preset
- **deleting**: currently deleting a preset

modes prevent race conditions and ensure operations complete before starting new ones.

## features

### 1. save presets

**how to use:**
1. adjust parameters in the gui to your desired configuration
2. open the "presets" folder in the gui
3. enter a name in the "preset name" field
4. click "💾 save preset"

**safety features:**
- empty names are rejected
- if a preset with the same name exists, you'll get a confirmation dialog
- current timestamp is saved with each preset for tracking

**what gets saved:**
- component toggles (bloom, halftone, film, color, geometry, animation, interaction)
- bloom parameters (threshold, strength, radius, exposure)
- halftone parameters (shape, radius, rotations, scatter, blending, etc.)
- film parameters (noise intensity, scanlines intensity, scanlines count, grayscale)
- color parameters (rgb values)
- image parameters (depth multiplier, point size, dropoff values, resolution, scale)
- animation parameters (rotation settings)

### 2. load presets

**how to use:**
1. open the "presets" folder
2. select a preset from the dropdown menu
3. click "📂 load preset"

**what happens:**
- all saved parameters are applied to the system
- gui controls automatically update to show new values
- geometry is rebuilt if needed
- scene is re-rendered
- changes are saved to session storage

### 3. delete presets

**how to use:**
1. select the preset you want to delete from the dropdown
2. click "🗑️ delete preset"
3. confirm the deletion in the dialog

**safety features:**
- confirmation dialog prevents accidental deletion
- you cannot delete if no preset is selected

### 4. export presets

**how to use:**
1. click "📤 export all"
2. a json file will be downloaded automatically

**file format:**
```json
{
  "version": "1.0",
  "exportDate": "2025-10-21T...",
  "presets": {
    "preset_name_1": { /* preset data */ },
    "preset_name_2": { /* preset data */ }
  }
}
```

**use cases:**
- backup your presets
- share presets with collaborators
- transfer presets between browsers
- version control for your configurations

### 5. import presets

**how to use:**
1. click "📥 import presets"
2. select a json file from your computer
3. choose import mode:
   - **merge** (click ok): combines with existing presets, imported presets overwrite conflicts
   - **overwrite** (click cancel): replaces all existing presets with imported ones

**safety features:**
- mode selection prevents accidental data loss
- validation checks ensure json format is correct
- error messages guide you if import fails

### 6. clear all presets

**how to use:**
1. click "🗑️ clear all"
2. type exactly "DELETE_ALL" in the prompt (case-sensitive)
3. press ok

**safety features:**
- requires exact confirmation string
- cancels if string doesn't match
- this is the most destructive operation, hence the extra protection

## status messages

the gui displays status messages for all operations:

- ✅ success messages (green indicator)
- ❌ error messages (red indicator)
- ⚠️ warning messages (yellow indicator)

status updates in real-time and persists until the next operation.

## storage details

### location
- **browser**: localStorage (persistent across sessions)
- **storage key**: `3d-cloud-presets`
- **format**: json

### size limits
- depends on browser (typically 5-10mb for localStorage)
- each preset is typically < 1kb
- can store hundreds of presets comfortably

### data structure
```javascript
{
  "preset_name": {
    "config": { /* component toggles */ },
    "bloomParams": { /* bloom settings */ },
    "halftoneParams": { /* halftone settings */ },
    "filmParams": { /* film settings */ },
    "colorParams": { /* color settings */ },
    "imageParams": { /* image settings */ },
    "animationParams": { /* animation settings */ },
    "timestamp": 1698172800000,
    "version": "1.0"
  }
}
```

## error handling

the system includes comprehensive error handling:

### common errors

1. **"preset name cannot be empty"**
   - solution: enter a name before saving

2. **"preset already exists"**
   - solution: choose a different name or confirm overwrite

3. **"preset does not exist"**
   - solution: refresh the preset list or select a valid preset

4. **"confirmation string does not match"**
   - solution: type exactly "DELETE_ALL" when clearing presets

5. **"invalid preset data format"**
   - solution: ensure imported file is valid json from export

### debugging

all operations log to console:
```javascript
console.log('preset saved:', name);
console.log('preset loaded:', name);
console.log('preset deleted:', name);
console.log('presets exported');
console.log('presets imported:', count);
console.log('all presets cleared');
```

errors also log detailed information:
```javascript
console.error('save preset error:', error);
console.error('load preset error:', error);
// etc.
```

## best practices

### naming conventions
- use descriptive names: "high_contrast_blue" instead of "preset1"
- use underscores or hyphens for multi-word names
- avoid special characters that might cause issues in filenames
- keep names concise but meaningful

### workflow tips
1. experiment freely - presets protect your work
2. save variations of promising configurations
3. export regularly as backup
4. organize presets by style or purpose
5. delete unused presets to keep list manageable

### sharing presets
1. export your presets
2. share the json file
3. others can import and use your configurations
4. include screenshots or descriptions for context

## technical notes

### browser compatibility
- requires modern browser with localStorage support
- tested on chrome, firefox, safari, edge
- works in private/incognito mode (but doesn't persist after closing)

### performance
- operations are synchronous and fast (< 1ms typically)
- no network requests - all local
- minimal memory footprint
- gui updates are throttled for smooth interaction

### extensibility
the `PresetManager` class is designed to be extensible:
- version field allows for future format changes
- timestamp enables sorting/filtering by date
- additional metadata can be added to preset objects
- import/export supports migration strategies

## troubleshooting

### presets not persisting
- check if localStorage is enabled in browser settings
- ensure you're not in private/incognito mode (or accept it's session-only)
- check browser storage quota

### presets not loading correctly
- verify all required modules are loaded
- check console for errors
- try refreshing the page
- ensure preset was saved after all modules initialized

### gui not updating after load
- this should be automatic - if not, it's a bug
- manually refresh parameters by adjusting any value
- report issue with console logs

### export file won't download
- check browser download settings
- ensure popup blocker isn't interfering
- try different browser

## api reference

### PresetManager class

```javascript
// create instance
const manager = new PresetManager();

// save preset
manager.savePreset(name, state, overwrite);
// returns: { success: true, message: string }

// load preset
manager.loadPreset(name);
// returns: { success: true, state: object, message: string }

// delete preset
manager.deletePreset(name);
// returns: { success: true, message: string }

// export presets
manager.exportPresets();
// returns: { version, exportDate, presets }

// import presets
manager.importPresets(data, mode);
// returns: { success: true, message: string, count: number }

// clear all
manager.clearAllPresets(confirmation);
// returns: { success: true, message: string }

// utility methods
manager.getPresetNames();      // returns: string[]
manager.presetExists(name);    // returns: boolean
manager.getPresetCount();      // returns: number
manager.getMode();             // returns: string
```

## future enhancements

potential additions for future versions:

- preset categories/tags
- preset search/filter
- preset preview thumbnails
- auto-save/recovery system
- cloud sync option
- preset rating/favorites
- preset history/versioning
- bulk operations
- preset comparison tool

## support

if you encounter issues:
1. check console for error messages
2. verify browser compatibility
3. ensure all files are properly loaded
4. try clearing browser cache
5. test in different browser

---

**version**: 1.0  
**last updated**: october 2025  
**author**: iba visual tools
