export const RESX = {
    "app": {
        "version": "v6"
    },
    "core": {
        "templateNoSupport": "This is not supported for templates. Create a mock device from this template to use this feature",
        "edgeNoSupport": "For Edge devices, the modules support this mode but only when running within the Edge runtime",
        "deviceL": "device",
        "deviceU": "Device",
    },
    "banner": {
        "connect": "CONNECTED TO: ",
        "local": "(local)",
        "edge": ['EDGE RUNTIME DETECTED: ', 'MODULE', 'RUNNING ON DEVICE'],
    },
    "nav": {
        "help": "Find out how to use mock-devices",
        "file": "Create or clone a new mock device or template utilizing DCMs, SDKs, DPS and Connection strings",
        "power": "Power up all devices that are currently off using randomized start times",
        "stop": "Power down all devices that are currently on",
        "sync": "Refresh the UX if out of sync with the device engine",
        "sim": "Reset the current configuration for the simulation (advanced)",
        "reset": "WARNING! Remove all mock devices and templates. Keeps the simulation configuration",
        "ux": "Change the mock-devices engine that this UX is binding to",
    },
    "selector": {
        "title": "DEVICES & TEMPLATES",
        "empty": ["Use ", " to add a new mock device, template or load/save/edit the state"],
        "card": {
            "device_title": "Select this mock device",
            "template_title": "Select this template",
            "modules_title": " modules(s)"
        },
    },
    "modal": {
        "error_json": "JSON has errors",
        "add": {
            "option1": {
                "title": "Add a mock device",
                "buttons": {
                    "button1_label": "Use DPS",
                    "button1_title": "Create the device using the DPS configuration",
                    "button2_label": "Use Connection String",
                    "button2_title": "Create the device using the a IoT device connection",
                },
                "select": "--Do not fork. Create with empty capabilities",
                "label": {
                    "clone": "Fork another mock device or template",
                    "deviceId": "Device ID (-# appended in bulk create)",
                    "dps": "DPS scope ID",
                    "sas": "SaS key",
                    "root": "Root key",
                    "dps_blob": "DPS blob payload",
                    "bulk_from": "Bulk from # (needs root key)",
                    "bulk_to": "Bulk from # (needs root key)",
                    "friendly": "mock-devices friendly name (-# appended in bulk create)",
                    "connstr": "Device connection string",
                    "friendly_sm": "mock-devices friendly name",
                },
                "cta_title": "Create this device",
                "cta_label": "Create this mock device",
            },
            "option2": {
                "title": "Add a template",
                "buttons": {
                    "button1_label": "Start with a DCM",
                    "button1_title": "Create a new template using a DTDLv1 DCM",
                    "button2_label": "Start new Template",
                    "button2_title": "Create a new empty (or cloned) template",
                },
                "label": {
                    "name": "mock-devices template Name",
                    "name_placeholder": "Leave blank to use DCM displayName",
                    "browse": "Browse disk for a DCM",
                },
                "cta_title": "Create this template",
                "cta_label": "Create template",
            },
            "option3": {
                "title": "State",
                "buttons": {
                    "button1_label": "Load/Save from file system",
                    "button1_title": "Load or save a state file",
                    "button2_label": "Editor",
                    "button2_title": "Create a new empty (or cloned) template",
                },
                "label": {
                    "state": "Load a state file",
                    "merge": "Merge Devices (keeps current Simulation config)",
                    "browse": "Browse for file",
                    "state_save": "Save a state file",
                    "browse_folder": "Browse folder",
                    "copy": "Copy/Paste the State's JSON",
                },
                "cta_title": "Replace the current and state and reset the simulator",
                "cta_label": "Update current State",
            },
            "option4": {
                "title": "Azure IoT Edge",
                "buttons": {
                    "button1_label": "Create Edge device",
                    "button1_title": "Create an Edge device to add modules",
                },
                "select": "--Do not fork. Create with empty capabilities",
                "label": {
                    "clone": "Fork another mock device or template",
                    "deviceId": "Edge Device ID (same as manifest.json)",
                    "friendly": "mock-devices friendly name",
                },
                "cta_title": "The Edge device is a container for modules and is not a real device. The Device Id and Module Id need to be the same as the ones in the manifest file.",
                "cta_label": "Create this Edge device profile",
            },
            "error_add": "The device(s) cannot be added",
            "error_generic_add": "Check configuration, max devices reached or possible duplicate device",
            "error_dcm": "The DCM is not valid or contains errors",
            "error_load": "Data cannot be loaded. Check file format or version mismatch",
            "error_state": "State cannot be updated. Format is not valid",
            "error_file": "State file did not save",
        },
        "console": {
            "text1": ["From", "of"]
        },
        "edit": {
            "title1": "Update this mock device's configuration",
            "update1_label": "Update configuration",
            "update1_title": "Stops the device. Requires a restart for new setting to take effect",
            "title2": "Update this mock device's position",
            "update2_label": "Change position",
            "update2_title": "Move the position of the device or template in the list",
        },
        "simulation": {
            "title": "Simulation",
            "text1": "Adjust the min/max ranges of each AUTO type and add to the Semantic Type schemas. Changes persisted to state. Devices must be restarted",
            "error_load": "Simulation data cannot be loaded",
            "error_save": "Simulation data cannot be saved",
            "configuration_label": "Configuration",
            "reset_label": "Reset simulation",
            "reset_title": "Stops all devices, resets the engine and applies the new simulation changes",
        },
        "module": {
            "title": "Add a new module",
            "select": "--Do not clone. Create module with no capabilities",
            "label": {
                "clone": "Clone another mock device or use a template",
                "moduleId": "Module ID",
            },
            "cta_title": "Create this module",
            "cta_label": "Add this module to the Edge device",
        },
        "ux": {
            "title": "Change the mock-devices engine",
            "warning": "This action will refresh the application",
            "label": {
                "server": "The server + port of the engine",
                "mode": "Reporting mode of bound engine [ux|server|mixed]",
                "mode_placeholder": "Leave empty for default",
            },
            "cta_title": "Change the UX to use a different mock-devices engine. This is useful if you run the mock-devices-de",
            "cta_label": "Change",
            "cta2_title": "Reset the UX to use the default mock-devices engine",
            "cta2_label": "Reset to default",
        }
    },
    "edge": {
        "title": "The Module Id and (Edge) Device Id must match for a module to run",
        "empty": [
            "Use + to add a new module. Modules get connection information via the Edge runtime",
            "When running in the runtime, the Edge device's Id and module's Id will be used to map the module to the environments variables on the host Edge device. To run multiple modules, deploy multiple mock-devices containers in the Edge manifest",
            "Modules have capabilities such as sending telemetry or reporting/receiving twin data like normal devices. Methods can be configured to send back a payload. Plan mode is disabled until capabilities are added"
        ],
        "buttons": {
            "module_title": "Select this module",
            "delete_label": "Delete",
            "delete_title": "Delete this module from the Edge device"
        },
        "card": {
            "title": "Module"
        },
    },
    "device": {
        "empty": "Use + to add new capabilities such as sending telemetry or reporting/receiving twin data. Methods can be configured to send back a payload. Plan mode is disabled until capabilities are added",
        "toolbar": {
            "powerOn_label": " Turn on power",
            "powerOn_title": "Connect this mock device to the hub and start sending and receiving events",
            "powerOff_label": " Turn off power",
            "powerOff_title": "Disconnect this mock device from the hub and stop sending data",
            "kindTemplate": "Template",
            "kindReal": "Hub device",
            "kindEdge": "Edge device",
            "kindModule": "Edge device module",
        },
        "title": {
            "planMode": "PLAN",
            "planMode_title": "Use plan mode create a series of timed send and receive events for all of the device capabilities. Switching modes stops the device and only the active mode runs",
            "interactiveMode": "INTERACTIVE",
            "interactiveMode_title": "Use interactive mode to setup each of the device's capabilities and/or send specific values. Switching modes stops the device and only the active mode runs",
        },
        "commands": {
            "restart_label": "Restart plan",
            "restart_title": "Restarting plan will reset the device to the start of th plan",
            "sendData_label": " Send Data",
            "sendData_title": "Add a capability to send telemetry and twin reported values",
            "receiveData_label": " Receive Data",
            "receiveData_title": "Add a capability to receive a specific desired property in the device twin",
            "method_label": " Method",
            "method_title": "Add a direct or C2D method capability to the device. This will stop the device",
            "module_label": " Module",
            "module_title": "Add a module to the Edge device",
            "config_title": "Change this device's configuration (advanced)",
            "delete_title": "Delete this device or template including all its capabilities. Ensure you have saved your state first",
            "edge_device_label": "Go to Edge device",
            "edge_device_title": "Manage the other modules in this Edge device",

        },
        "card": {
            "UX": "UX",
            "save_label": "Save",
            "save_title": "Save changes to this capability",
            "delete_label": "Delete",
            "delete_title": "Delete this capability",
            "read_label": "Read",
            "read_title": "Read the last known twin value for this capability. Device must be on",
            "send_label": "Send",
            "send_title": "Send this value immediately bypassing runloop time and/or mock sensor value",
            "read_param_label": "Read",
            "read_param_title": "Read the last known set of parameters sent for this method capability",
            "waiting_placeholder": "Waiting ...",
            "save_pre_error": "Select or remove a sensor to update this property",
            "color_title": "Pick a color for this capability in mock-devices",
            "color_label": "Color",
            "select": "--Select",
            "noselect": "--No send capability",
            "toggle": {
                "enabled_label": "Enabled",
                "enabled_title": "Enable this capability in the simulation (always enabled)",
                "complex_label": "Complex value",
                "complex_title": "Enable this to use a JSON value instead of a primitive",
                "interface_label": "Interface",
                "interface_title": "",
                "device_sdk_label": "Device SDK",
                "device_sdk_title": "Specify which API to use for sending data (Twin or Msg)",
                "runloop_label": "Loop",
                "runloop_title": "Send the value, complex or mock value on a timed loop without the need to press Send. Send button + value field can be used to override the current automated value",
                "mock_label": "Mock",
                "mock_title": "Use a simulated sensor that behaves like a real world thing. Ignores current value field but can be overridden. Does not support complex values",
            },
            "send": {
                "property_label": "Capability name",
                "property_title": "This is the name of the capability sent to the hub",
                "value_label": "Enter value",
                "value_title": "Use this field to define a value to use with the Send button. Mock sensors will use their own value enabling this to be used as an override when pressing Send",
                "value_placeholder": "Enter a value",
                "value_complex_label": "Cannot override complex",
                "value_mock_label": "Can override mock",
                "value_complex_placeholder": "Using complex value",
                "value_mock_placeholder": "Using mock value",
                "complex_label": "JSON payload for the value of this capability",
                "complex_title": "See Help for full ist of AUTO macros available",
                "int_name_label": "Name",
                "int_name_title": "The PnP interface instance name. Can be duplicated across capabilities",
                "int_urn_label": "URN",
                "int_urn_title": "The PnP interface unique ID. Can be duplicated across capabilities",
                "api_label": "API",
                "api_title": "Choose between the Msg/Event API or the Twin API of the device SDK",
                "string_label": "Send as value string",
                "string_title": "Set to false for JSON, booleans, arrays",
                "unit_label": "Time unit",
                "unit_title": "Choose between minutes and seconds",
                "duration_label": "Duration",
                "duration_title": "The length of the time duration",
                "sensor_label": "Sensor",
                "sensor_title": "Select a simulated sensor that will be used as the value of this capability",
                "sensor_generic_title": "Click to configure the sensor",
            },
            "method": {
                "title": "Method / Command",
                "property_label": "Method name",
                "property_restart_label": "Method name (restart required on change)",
                "property_title": "The name that is used to invoke the method remotely. Changing the name of a direct method will require a device restart",
                "int_name_label": "Name",
                "int_name_title": "The PnP interface instance name. Can be duplicated across capabilities",
                "int_urn_label": "URN",
                "int_urn_title": "The PnP interface unique ID. Can be duplicated across capabilities",
                "c2d_label": "Make C2D Command (off is Direct Method)",
                "c2d_title": "C2D commands are fire and forget from the server side. The mock-device will not send a response",
                "request_label": "Last known request parameter",
                "request_title": "The last known set of parameters received for this method",
                "response_label": "Response status to send (not for C2D)",
                "response_title": "The response status sent if this method is invoked (not C2D)",
                "response_payload_label": "Response payload to send",
                "response_payload_title": "The response payload returned if this method is invoked. C2D will use this if reporting via property too",
                "twin_rpt_label": "Use a capability to send a response",
                "twin_rpt_title": "The capability will be sent after the method request has been processed",
                "property_report_label": "Select capability",
                "property_report_title": "Both telemetry and twin send data can be used as the response"
            },
            "receive": {
                "title": "Receive twin (Desired)",
                "property_label": "Capability name",
                "property_title": "The property name received down the wire",
                "int_name_label": "Name",
                "int_name_title": "The PnP interface instance name. Can be duplicated across capabilities",
                "int_urn_label": "URN",
                "int_urn_title": "The PnP interface unique ID. Can be duplicated across capabilities",
                "version_label": "Last desired version of capability",
                "version_title": "The properties/desired/$version of the twin associated with this device",
                "value_label": "Last desired value of capability",
                "value_title": "The value at the properties/desired/<name> of the twin associated with this device",
                "twin_rpt_label": "Use a capability to send a response",
                "twin_rpt_title": "The capability will be sent after the desired is received (Read is not required)",
                "property_report_label": "Select capability",
                "property_report_title": "Both telemetry and twin send data can be used as the response",
                "property_version_label": "Override capability's value",
                "property_version_title": "Ignore the current capability's configuration and use a custom value",
                "property_convention_label": "Use convention",
                "property_convention_title": "Will treat data as objects and merge desired received into reported payload. Then it will replace any AUTO/RECEIVE macros",
                "property_version_payload_label": "Value (can be JSON)",
                "property_version_payload_title": "See Help for full ist of AUTO macros available",
            }
        },
        "plan": {
            "empty": {
                "plan_label": "A plan allows you to configure a timeline of send events with values to create repeatable device behavior. Values, loops and mocks from interactive mode are not applicable in plan mode",
                "startup_label": "Start up events are capability values that are sent to the hub when the device first powers up",
                "timeline_label": "Timeline events are capability values that are sent to the hub at a specific duration after the device powers up",
                "random_label": "Random events are capability values that are sent to the hub at some time between the first and last timeline event. Repeated if range is small",
                "receive_label": "Receive events create responses to capabilities that can be called or set remotely",
            },
            "core": {
                "plan_label": "Plan",
                "value_placeholder": "Enter Value/JSON/AUTO",
                "remove_label": "Remove",
                "remove_title": "Remove this event",
                "startup_label": "Start up events",
                "startup_title": "Click to add a telemetry or twin reported start up event",
                "timeline_label": "Timeline events",
                "timeline_title": "Click to add a telemetry or twin reported timed event",
                "random_label": "Random events",
                "random_title": "Click to add a telemetry or twin random timed event",
                "receive_label": "Receive events",
                "receive_title": "Click to add a desired twin or method receive event",
                "loop_label": "Loop plan",
                "loop_title": "Executes the same set of event after the last one has finished",
                "savePlan_label": "Save plan",
                "savePlan_title": "Save the plan. This will stop the device and it will need to be manually restarted",
                "clearPlan_label": "Clear plan",
                "clearPlan_title": "Clear all the events in the plan",
            },
            "headers": {
                "property_label": "Capability",
                "property_title": "The capability to send using the API/SDK setup from interactive mode",
                "value_label": "Value to send",
                "value_title": "A custom value ignoring values from interactive mode. Supports AUTO macros and can be JSON",
                "time_start_label": "Start time",
                "time_start_title": "The time in seconds to send the event time after the device has powered on",
                "from_label": "Between (from)",
                "from_title": "The earliest time in seconds to send the random event",
                "to_label": "Between (to)",
                "to_title": "The latest time in seconds to send the random event",
                "property_in_label": "Capability receive",
                "property_in_title": "The capability to respond to. Could be desired twin, direct method or C2D command",
                "property_out_label": "Capability send",
            }
        }
    },
    "console": {
        "pause_title": "Play/Pause the logging window",
        "erase_title": "Clear the logging window",
    }
}