// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages an Application Gateway.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const azurerm_resource_group_test = new azure.core.ResourceGroup("test", {
 *     location: "West US",
 *     name: "example-resources",
 * });
 * const azurerm_virtual_network_test = new azure.network.VirtualNetwork("test", {
 *     addressSpaces: ["10.254.0.0/16"],
 *     location: azurerm_resource_group_test.location,
 *     name: "example-network",
 *     resourceGroupName: azurerm_resource_group_test.name,
 * });
 * const local_backend_address_pool_name = azurerm_virtual_network_test.name.apply(__arg0 => `${__arg0}-beap`);
 * const local_frontend_ip_configuration_name = azurerm_virtual_network_test.name.apply(__arg0 => `${__arg0}-feip`);
 * const local_frontend_port_name = azurerm_virtual_network_test.name.apply(__arg0 => `${__arg0}-feport`);
 * const local_http_setting_name = azurerm_virtual_network_test.name.apply(__arg0 => `${__arg0}-be-htst`);
 * const local_listener_name = azurerm_virtual_network_test.name.apply(__arg0 => `${__arg0}-httplstn`);
 * const local_request_routing_rule_name = azurerm_virtual_network_test.name.apply(__arg0 => `${__arg0}-rqrt`);
 * const azurerm_public_ip_test = new azure.network.PublicIp("test", {
 *     allocationMethod: "Dynamic",
 *     location: azurerm_resource_group_test.location,
 *     name: "example-pip",
 *     resourceGroupName: azurerm_resource_group_test.name,
 * });
 * const azurerm_subnet_frontend = new azure.network.Subnet("frontend", {
 *     addressPrefix: "10.254.0.0/24",
 *     name: "frontend",
 *     resourceGroupName: azurerm_resource_group_test.name,
 *     virtualNetworkName: azurerm_virtual_network_test.name,
 * });
 * const azurerm_application_gateway_network = new azure.network.ApplicationGateway("network", {
 *     backendAddressPools: [{
 *         name: local_backend_address_pool_name,
 *     }],
 *     backendHttpSettings: [{
 *         cookieBasedAffinity: "Disabled",
 *         name: local_http_setting_name,
 *         port: 80,
 *         protocol: "Http",
 *         requestTimeout: 1,
 *     }],
 *     frontendIpConfigurations: [{
 *         name: local_frontend_ip_configuration_name,
 *         publicIpAddressId: azurerm_public_ip_test.id,
 *     }],
 *     frontendPorts: [{
 *         name: local_frontend_port_name,
 *         port: 80,
 *     }],
 *     gatewayIpConfigurations: [{
 *         name: "my-gateway-ip-configuration",
 *         subnetId: azurerm_subnet_frontend.id,
 *     }],
 *     httpListeners: [{
 *         frontendIpConfigurationName: local_frontend_ip_configuration_name,
 *         frontendPortName: local_frontend_port_name,
 *         name: local_listener_name,
 *         protocol: "Http",
 *     }],
 *     location: azurerm_resource_group_test.location,
 *     name: "example-appgateway",
 *     requestRoutingRules: [{
 *         backendAddressPoolName: local_backend_address_pool_name,
 *         backendHttpSettingsName: local_http_setting_name,
 *         httpListenerName: local_listener_name,
 *         name: local_request_routing_rule_name,
 *         ruleType: "Basic",
 *     }],
 *     resourceGroupName: azurerm_resource_group_test.name,
 *     sku: {
 *         capacity: 2,
 *         name: "Standard_Small",
 *         tier: "Standard",
 *     },
 * });
 * const azurerm_subnet_backend = new azure.network.Subnet("backend", {
 *     addressPrefix: "10.254.2.0/24",
 *     name: "backend",
 *     resourceGroupName: azurerm_resource_group_test.name,
 *     virtualNetworkName: azurerm_virtual_network_test.name,
 * });
 * ```
 */
export class ApplicationGateway extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationGatewayState, opts?: pulumi.CustomResourceOptions): ApplicationGateway {
        return new ApplicationGateway(name, <any>state, { ...opts, id: id });
    }

    /**
     * One or more `authentication_certificate` blocks as defined below.
     */
    public readonly authenticationCertificates: pulumi.Output<{ data: string, id: string, name: string }[] | undefined>;
    /**
     * One or more `backend_address_pool` blocks as defined below.
     */
    public readonly backendAddressPools: pulumi.Output<{ fqdnLists?: string[], id: string, ipAddressLists?: string[], name: string }[]>;
    /**
     * One or more `backend_http_settings` blocks as defined below.
     */
    public readonly backendHttpSettings: pulumi.Output<{ authenticationCertificates?: { id: string, name: string }[], cookieBasedAffinity: string, id: string, name: string, port: number, probeId: string, probeName?: string, protocol: string, requestTimeout?: number }[]>;
    /**
     * A list of SSL Protocols which should be disabled on this Application Gateway. Possible values are `TLSv1_0`, `TLSv1_1` and `TLSv1_2`.
     */
    public readonly disabledSslProtocols: pulumi.Output<string[] | undefined>;
    /**
     * One or more `frontend_ip_configuration` blocks as defined below.
     */
    public readonly frontendIpConfigurations: pulumi.Output<{ id: string, name: string, privateIpAddress: string, privateIpAddressAllocation: string, publicIpAddressId: string, subnetId: string }[]>;
    /**
     * One or more `frontend_port` blocks as defined below.
     */
    public readonly frontendPorts: pulumi.Output<{ id: string, name: string, port: number }[]>;
    /**
     * One or more `gateway_ip_configuration` blocks as defined below.
     */
    public readonly gatewayIpConfigurations: pulumi.Output<{ id: string, name: string, subnetId: string }[]>;
    /**
     * One or more `http_listener` blocks as defined below.
     */
    public readonly httpListeners: pulumi.Output<{ frontendIpConfigurationId: string, frontendIpConfigurationName: string, frontendPortId: string, frontendPortName: string, hostName?: string, id: string, name: string, protocol: string, requireSni?: boolean, sslCertificateId: string, sslCertificateName?: string }[]>;
    /**
     * The Azure region where the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    public readonly location: pulumi.Output<string>;
    /**
     * The name of the Application Gateway. Changing this forces a new resource to be created.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * One or more `probe` blocks as defined below.
     */
    public readonly probes: pulumi.Output<{ host: string, id: string, interval: number, match: { body?: string, statusCodes?: string[] }, minimumServers?: number, name: string, path: string, protocol: string, timeout: number, unhealthyThreshold: number }[] | undefined>;
    /**
     * One or more `request_routing_rule` blocks as defined below.
     */
    public readonly requestRoutingRules: pulumi.Output<{ backendAddressPoolId: string, backendAddressPoolName?: string, backendHttpSettingsId: string, backendHttpSettingsName?: string, httpListenerId: string, httpListenerName: string, id: string, name: string, ruleType: string, urlPathMapId: string, urlPathMapName?: string }[]>;
    /**
     * The name of the resource group in which to the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    public readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `sku` block as defined below.
     */
    public readonly sku: pulumi.Output<{ capacity: number, name: string, tier: string }>;
    /**
     * A list of `ssl_certificate` blocks as defined below.
     */
    public readonly sslCertificates: pulumi.Output<{ data: string, id: string, name: string, password: string, publicCertData: string }[] | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<{[key: string]: any}>;
    /**
     * One or more `url_path_map` blocks as defined below.
     */
    public readonly urlPathMaps: pulumi.Output<{ defaultBackendAddressPoolId: string, defaultBackendAddressPoolName: string, defaultBackendHttpSettingsId: string, defaultBackendHttpSettingsName: string, id: string, name: string, pathRules: { backendAddressPoolId: string, backendAddressPoolName: string, backendHttpSettingsId: string, backendHttpSettingsName: string, id: string, name: string, paths: string[] }[] }[] | undefined>;
    /**
     * A `waf_configuration` block as defined below.
     */
    public readonly wafConfiguration: pulumi.Output<{ enabled: boolean, firewallMode: string, ruleSetType?: string, ruleSetVersion: string } | undefined>;

    /**
     * Create a ApplicationGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationGatewayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplicationGatewayArgs | ApplicationGatewayState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ApplicationGatewayState = argsOrState as ApplicationGatewayState | undefined;
            inputs["authenticationCertificates"] = state ? state.authenticationCertificates : undefined;
            inputs["backendAddressPools"] = state ? state.backendAddressPools : undefined;
            inputs["backendHttpSettings"] = state ? state.backendHttpSettings : undefined;
            inputs["disabledSslProtocols"] = state ? state.disabledSslProtocols : undefined;
            inputs["frontendIpConfigurations"] = state ? state.frontendIpConfigurations : undefined;
            inputs["frontendPorts"] = state ? state.frontendPorts : undefined;
            inputs["gatewayIpConfigurations"] = state ? state.gatewayIpConfigurations : undefined;
            inputs["httpListeners"] = state ? state.httpListeners : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["probes"] = state ? state.probes : undefined;
            inputs["requestRoutingRules"] = state ? state.requestRoutingRules : undefined;
            inputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            inputs["sku"] = state ? state.sku : undefined;
            inputs["sslCertificates"] = state ? state.sslCertificates : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["urlPathMaps"] = state ? state.urlPathMaps : undefined;
            inputs["wafConfiguration"] = state ? state.wafConfiguration : undefined;
        } else {
            const args = argsOrState as ApplicationGatewayArgs | undefined;
            if (!args || args.backendAddressPools === undefined) {
                throw new Error("Missing required property 'backendAddressPools'");
            }
            if (!args || args.backendHttpSettings === undefined) {
                throw new Error("Missing required property 'backendHttpSettings'");
            }
            if (!args || args.frontendIpConfigurations === undefined) {
                throw new Error("Missing required property 'frontendIpConfigurations'");
            }
            if (!args || args.frontendPorts === undefined) {
                throw new Error("Missing required property 'frontendPorts'");
            }
            if (!args || args.gatewayIpConfigurations === undefined) {
                throw new Error("Missing required property 'gatewayIpConfigurations'");
            }
            if (!args || args.httpListeners === undefined) {
                throw new Error("Missing required property 'httpListeners'");
            }
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.requestRoutingRules === undefined) {
                throw new Error("Missing required property 'requestRoutingRules'");
            }
            if (!args || args.resourceGroupName === undefined) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if (!args || args.sku === undefined) {
                throw new Error("Missing required property 'sku'");
            }
            inputs["authenticationCertificates"] = args ? args.authenticationCertificates : undefined;
            inputs["backendAddressPools"] = args ? args.backendAddressPools : undefined;
            inputs["backendHttpSettings"] = args ? args.backendHttpSettings : undefined;
            inputs["disabledSslProtocols"] = args ? args.disabledSslProtocols : undefined;
            inputs["frontendIpConfigurations"] = args ? args.frontendIpConfigurations : undefined;
            inputs["frontendPorts"] = args ? args.frontendPorts : undefined;
            inputs["gatewayIpConfigurations"] = args ? args.gatewayIpConfigurations : undefined;
            inputs["httpListeners"] = args ? args.httpListeners : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["probes"] = args ? args.probes : undefined;
            inputs["requestRoutingRules"] = args ? args.requestRoutingRules : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["sslCertificates"] = args ? args.sslCertificates : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["urlPathMaps"] = args ? args.urlPathMaps : undefined;
            inputs["wafConfiguration"] = args ? args.wafConfiguration : undefined;
        }
        super("azure:network/applicationGateway:ApplicationGateway", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ApplicationGateway resources.
 */
export interface ApplicationGatewayState {
    /**
     * One or more `authentication_certificate` blocks as defined below.
     */
    readonly authenticationCertificates?: pulumi.Input<pulumi.Input<{ data: pulumi.Input<string>, id?: pulumi.Input<string>, name: pulumi.Input<string> }>[]>;
    /**
     * One or more `backend_address_pool` blocks as defined below.
     */
    readonly backendAddressPools?: pulumi.Input<pulumi.Input<{ fqdnLists?: pulumi.Input<pulumi.Input<string>[]>, id?: pulumi.Input<string>, ipAddressLists?: pulumi.Input<pulumi.Input<string>[]>, name: pulumi.Input<string> }>[]>;
    /**
     * One or more `backend_http_settings` blocks as defined below.
     */
    readonly backendHttpSettings?: pulumi.Input<pulumi.Input<{ authenticationCertificates?: pulumi.Input<pulumi.Input<{ id?: pulumi.Input<string>, name: pulumi.Input<string> }>[]>, cookieBasedAffinity: pulumi.Input<string>, id?: pulumi.Input<string>, name: pulumi.Input<string>, port: pulumi.Input<number>, probeId?: pulumi.Input<string>, probeName?: pulumi.Input<string>, protocol: pulumi.Input<string>, requestTimeout?: pulumi.Input<number> }>[]>;
    /**
     * A list of SSL Protocols which should be disabled on this Application Gateway. Possible values are `TLSv1_0`, `TLSv1_1` and `TLSv1_2`.
     */
    readonly disabledSslProtocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * One or more `frontend_ip_configuration` blocks as defined below.
     */
    readonly frontendIpConfigurations?: pulumi.Input<pulumi.Input<{ id?: pulumi.Input<string>, name: pulumi.Input<string>, privateIpAddress?: pulumi.Input<string>, privateIpAddressAllocation?: pulumi.Input<string>, publicIpAddressId?: pulumi.Input<string>, subnetId?: pulumi.Input<string> }>[]>;
    /**
     * One or more `frontend_port` blocks as defined below.
     */
    readonly frontendPorts?: pulumi.Input<pulumi.Input<{ id?: pulumi.Input<string>, name: pulumi.Input<string>, port: pulumi.Input<number> }>[]>;
    /**
     * One or more `gateway_ip_configuration` blocks as defined below.
     */
    readonly gatewayIpConfigurations?: pulumi.Input<pulumi.Input<{ id?: pulumi.Input<string>, name: pulumi.Input<string>, subnetId: pulumi.Input<string> }>[]>;
    /**
     * One or more `http_listener` blocks as defined below.
     */
    readonly httpListeners?: pulumi.Input<pulumi.Input<{ frontendIpConfigurationId?: pulumi.Input<string>, frontendIpConfigurationName: pulumi.Input<string>, frontendPortId?: pulumi.Input<string>, frontendPortName: pulumi.Input<string>, hostName?: pulumi.Input<string>, id?: pulumi.Input<string>, name: pulumi.Input<string>, protocol: pulumi.Input<string>, requireSni?: pulumi.Input<boolean>, sslCertificateId?: pulumi.Input<string>, sslCertificateName?: pulumi.Input<string> }>[]>;
    /**
     * The Azure region where the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the Application Gateway. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * One or more `probe` blocks as defined below.
     */
    readonly probes?: pulumi.Input<pulumi.Input<{ host: pulumi.Input<string>, id?: pulumi.Input<string>, interval: pulumi.Input<number>, match?: pulumi.Input<{ body?: pulumi.Input<string>, statusCodes?: pulumi.Input<pulumi.Input<string>[]> }>, minimumServers?: pulumi.Input<number>, name: pulumi.Input<string>, path: pulumi.Input<string>, protocol: pulumi.Input<string>, timeout: pulumi.Input<number>, unhealthyThreshold: pulumi.Input<number> }>[]>;
    /**
     * One or more `request_routing_rule` blocks as defined below.
     */
    readonly requestRoutingRules?: pulumi.Input<pulumi.Input<{ backendAddressPoolId?: pulumi.Input<string>, backendAddressPoolName?: pulumi.Input<string>, backendHttpSettingsId?: pulumi.Input<string>, backendHttpSettingsName?: pulumi.Input<string>, httpListenerId?: pulumi.Input<string>, httpListenerName: pulumi.Input<string>, id?: pulumi.Input<string>, name: pulumi.Input<string>, ruleType: pulumi.Input<string>, urlPathMapId?: pulumi.Input<string>, urlPathMapName?: pulumi.Input<string> }>[]>;
    /**
     * The name of the resource group in which to the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * A `sku` block as defined below.
     */
    readonly sku?: pulumi.Input<{ capacity: pulumi.Input<number>, name: pulumi.Input<string>, tier: pulumi.Input<string> }>;
    /**
     * A list of `ssl_certificate` blocks as defined below.
     */
    readonly sslCertificates?: pulumi.Input<pulumi.Input<{ data: pulumi.Input<string>, id?: pulumi.Input<string>, name: pulumi.Input<string>, password: pulumi.Input<string>, publicCertData?: pulumi.Input<string> }>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * One or more `url_path_map` blocks as defined below.
     */
    readonly urlPathMaps?: pulumi.Input<pulumi.Input<{ defaultBackendAddressPoolId?: pulumi.Input<string>, defaultBackendAddressPoolName: pulumi.Input<string>, defaultBackendHttpSettingsId?: pulumi.Input<string>, defaultBackendHttpSettingsName: pulumi.Input<string>, id?: pulumi.Input<string>, name: pulumi.Input<string>, pathRules: pulumi.Input<pulumi.Input<{ backendAddressPoolId?: pulumi.Input<string>, backendAddressPoolName: pulumi.Input<string>, backendHttpSettingsId?: pulumi.Input<string>, backendHttpSettingsName: pulumi.Input<string>, id?: pulumi.Input<string>, name: pulumi.Input<string>, paths: pulumi.Input<pulumi.Input<string>[]> }>[]> }>[]>;
    /**
     * A `waf_configuration` block as defined below.
     */
    readonly wafConfiguration?: pulumi.Input<{ enabled: pulumi.Input<boolean>, firewallMode: pulumi.Input<string>, ruleSetType?: pulumi.Input<string>, ruleSetVersion: pulumi.Input<string> }>;
}

/**
 * The set of arguments for constructing a ApplicationGateway resource.
 */
export interface ApplicationGatewayArgs {
    /**
     * One or more `authentication_certificate` blocks as defined below.
     */
    readonly authenticationCertificates?: pulumi.Input<pulumi.Input<{ data: pulumi.Input<string>, id?: pulumi.Input<string>, name: pulumi.Input<string> }>[]>;
    /**
     * One or more `backend_address_pool` blocks as defined below.
     */
    readonly backendAddressPools: pulumi.Input<pulumi.Input<{ fqdnLists?: pulumi.Input<pulumi.Input<string>[]>, id?: pulumi.Input<string>, ipAddressLists?: pulumi.Input<pulumi.Input<string>[]>, name: pulumi.Input<string> }>[]>;
    /**
     * One or more `backend_http_settings` blocks as defined below.
     */
    readonly backendHttpSettings: pulumi.Input<pulumi.Input<{ authenticationCertificates?: pulumi.Input<pulumi.Input<{ id?: pulumi.Input<string>, name: pulumi.Input<string> }>[]>, cookieBasedAffinity: pulumi.Input<string>, id?: pulumi.Input<string>, name: pulumi.Input<string>, port: pulumi.Input<number>, probeId?: pulumi.Input<string>, probeName?: pulumi.Input<string>, protocol: pulumi.Input<string>, requestTimeout?: pulumi.Input<number> }>[]>;
    /**
     * A list of SSL Protocols which should be disabled on this Application Gateway. Possible values are `TLSv1_0`, `TLSv1_1` and `TLSv1_2`.
     */
    readonly disabledSslProtocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * One or more `frontend_ip_configuration` blocks as defined below.
     */
    readonly frontendIpConfigurations: pulumi.Input<pulumi.Input<{ id?: pulumi.Input<string>, name: pulumi.Input<string>, privateIpAddress?: pulumi.Input<string>, privateIpAddressAllocation?: pulumi.Input<string>, publicIpAddressId?: pulumi.Input<string>, subnetId?: pulumi.Input<string> }>[]>;
    /**
     * One or more `frontend_port` blocks as defined below.
     */
    readonly frontendPorts: pulumi.Input<pulumi.Input<{ id?: pulumi.Input<string>, name: pulumi.Input<string>, port: pulumi.Input<number> }>[]>;
    /**
     * One or more `gateway_ip_configuration` blocks as defined below.
     */
    readonly gatewayIpConfigurations: pulumi.Input<pulumi.Input<{ id?: pulumi.Input<string>, name: pulumi.Input<string>, subnetId: pulumi.Input<string> }>[]>;
    /**
     * One or more `http_listener` blocks as defined below.
     */
    readonly httpListeners: pulumi.Input<pulumi.Input<{ frontendIpConfigurationId?: pulumi.Input<string>, frontendIpConfigurationName: pulumi.Input<string>, frontendPortId?: pulumi.Input<string>, frontendPortName: pulumi.Input<string>, hostName?: pulumi.Input<string>, id?: pulumi.Input<string>, name: pulumi.Input<string>, protocol: pulumi.Input<string>, requireSni?: pulumi.Input<boolean>, sslCertificateId?: pulumi.Input<string>, sslCertificateName?: pulumi.Input<string> }>[]>;
    /**
     * The Azure region where the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the Application Gateway. Changing this forces a new resource to be created.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * One or more `probe` blocks as defined below.
     */
    readonly probes?: pulumi.Input<pulumi.Input<{ host: pulumi.Input<string>, id?: pulumi.Input<string>, interval: pulumi.Input<number>, match?: pulumi.Input<{ body?: pulumi.Input<string>, statusCodes?: pulumi.Input<pulumi.Input<string>[]> }>, minimumServers?: pulumi.Input<number>, name: pulumi.Input<string>, path: pulumi.Input<string>, protocol: pulumi.Input<string>, timeout: pulumi.Input<number>, unhealthyThreshold: pulumi.Input<number> }>[]>;
    /**
     * One or more `request_routing_rule` blocks as defined below.
     */
    readonly requestRoutingRules: pulumi.Input<pulumi.Input<{ backendAddressPoolId?: pulumi.Input<string>, backendAddressPoolName?: pulumi.Input<string>, backendHttpSettingsId?: pulumi.Input<string>, backendHttpSettingsName?: pulumi.Input<string>, httpListenerId?: pulumi.Input<string>, httpListenerName: pulumi.Input<string>, id?: pulumi.Input<string>, name: pulumi.Input<string>, ruleType: pulumi.Input<string>, urlPathMapId?: pulumi.Input<string>, urlPathMapName?: pulumi.Input<string> }>[]>;
    /**
     * The name of the resource group in which to the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A `sku` block as defined below.
     */
    readonly sku: pulumi.Input<{ capacity: pulumi.Input<number>, name: pulumi.Input<string>, tier: pulumi.Input<string> }>;
    /**
     * A list of `ssl_certificate` blocks as defined below.
     */
    readonly sslCertificates?: pulumi.Input<pulumi.Input<{ data: pulumi.Input<string>, id?: pulumi.Input<string>, name: pulumi.Input<string>, password: pulumi.Input<string>, publicCertData?: pulumi.Input<string> }>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * One or more `url_path_map` blocks as defined below.
     */
    readonly urlPathMaps?: pulumi.Input<pulumi.Input<{ defaultBackendAddressPoolId?: pulumi.Input<string>, defaultBackendAddressPoolName: pulumi.Input<string>, defaultBackendHttpSettingsId?: pulumi.Input<string>, defaultBackendHttpSettingsName: pulumi.Input<string>, id?: pulumi.Input<string>, name: pulumi.Input<string>, pathRules: pulumi.Input<pulumi.Input<{ backendAddressPoolId?: pulumi.Input<string>, backendAddressPoolName: pulumi.Input<string>, backendHttpSettingsId?: pulumi.Input<string>, backendHttpSettingsName: pulumi.Input<string>, id?: pulumi.Input<string>, name: pulumi.Input<string>, paths: pulumi.Input<pulumi.Input<string>[]> }>[]> }>[]>;
    /**
     * A `waf_configuration` block as defined below.
     */
    readonly wafConfiguration?: pulumi.Input<{ enabled: pulumi.Input<boolean>, firewallMode: pulumi.Input<string>, ruleSetType?: pulumi.Input<string>, ruleSetVersion: pulumi.Input<string> }>;
}
