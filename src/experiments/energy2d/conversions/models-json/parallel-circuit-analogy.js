var models_library = models_library || {};
models_library.parallel_circuit_analogy = {
  "model": {
    "model_width": 0.1,
    "model_height": 0.1,
    "measurement_interval": 100,
    "viewupdate_interval": 10,
    "sun_angle": 1.5707964,
    "solar_power_density": 2000.0,
    "solar_ray_count": 24,
    "solar_ray_speed": 0.1,
    "photon_emission_interval": 20,
    "convective": false,
    "background_conductivity": 1.0E-9,
    "thermal_buoyancy": 2.5E-4,
    "buoyancy_approximation": 1,
    "boundary": {
      "flux_at_border": {
        "upper": 0.0,
        "lower": 0.0,
        "left": 0.0,
        "right": 0.0
      }
    },
    "structure": {
      "part": [
        {
          "rectangle": {
            "x": 0.0,
            "y": 0.024,
            "width": 0.02,
            "height": 0.05
          },
          "thermal_conductivity": 0.08,
          "specific_heat": 1300.0,
          "density": 25.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 50.0,
          "constant_temperature": true,
          "filled": false,
          "label": "%temperature",
          "draggable": false
        },
        {
          "rectangle": {
            "x": 0.08,
            "y": 0.024,
            "width": 0.02,
            "height": 0.05
          },
          "thermal_conductivity": 0.08,
          "specific_heat": 1300.0,
          "density": 25.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false,
          "texture": {
            "texture_fg": -0x1000000,
            "texture_bg": -0x1,
            "texture_style": 16,
            "texture_width": 12,
            "texture_height": 12
          },
          "filled": false,
          "draggable": false
        },
        {
          "rectangle": {
            "x": 0.02,
            "y": 0.026,
            "width": 0.06,
            "height": 0.01
          },
          "thermal_conductivity": 0.01,
          "specific_heat": 1000.0,
          "density": 900.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false,
          "texture": {
            "texture_fg": -0x1000000,
            "texture_bg": -0x1,
            "texture_style": 10,
            "texture_width": 10,
            "texture_height": 10
          },
          "filled": false,
          "label": "R2"
        },
        {
          "rectangle": {
            "x": 0.02,
            "y": 0.038,
            "width": 0.06,
            "height": 0.01
          },
          "thermal_conductivity": 1.0,
          "specific_heat": 1000.0,
          "density": 900.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false,
          "texture": {
            "texture_fg": -0x1000000,
            "texture_bg": -0x1,
            "texture_style": 9,
            "texture_width": 12,
            "texture_height": 12
          },
          "filled": false,
          "label": "R1"
        },
        {
          "rectangle": {
            "x": 0.02,
            "y": 0.061999995,
            "width": 0.06,
            "height": 0.01
          },
          "thermal_conductivity": 1.0,
          "specific_heat": 1000.0,
          "density": 900.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false,
          "texture": {
            "texture_fg": -0x1000000,
            "texture_bg": -0x1,
            "texture_style": 9,
            "texture_width": 12,
            "texture_height": 12
          },
          "filled": false,
          "label": "R1"
        },
        {
          "rectangle": {
            "x": 0.02,
            "y": 0.049999997,
            "width": 0.06,
            "height": 0.01
          },
          "thermal_conductivity": 0.01,
          "specific_heat": 1000.0,
          "density": 900.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false,
          "texture": {
            "texture_fg": -0x1000000,
            "texture_bg": -0x1,
            "texture_style": 10,
            "texture_width": 10,
            "texture_height": 10
          },
          "filled": false,
          "label": "R2"
        }
      ]
    }
  },
  "sensor": {
    "thermometer": [
      {
        "x": 0.09,
        "y": 0.05
      },
      {
        "label": "T1",
        "x": 0.062,
        "y": 0.032
      },
      {
        "label": "T2",
        "x": 0.062,
        "y": 0.044
      },
      {
        "label": "T3",
        "x": 0.062,
        "y": 0.055999998
      },
      {
        "label": "T4",
        "x": 0.062000003,
        "y": 0.067833334
      }
    ]
  },
  "view": {
    "grid": true,
    "grid_size": 10,
    "rainbow_x": 0.0,
    "rainbow_y": 0.0,
    "rainbow_w": 0.0,
    "rainbow_h": 0.0,
    "minimum_temperature": 0.0,
    "maximum_temperature": 100.0,
    "heat_flux_line": true,
    "clock": false
  }
};