// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages the association between a Network Interface and a Application Gateway's Backend Address Pool.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * 
 * const azurerm_resource_group_test = new azure.core.ResourceGroup("test", {
 *     location: "West Europe",
 *     name: "example-resources",
 * });
 * const azurerm_virtual_network_test = new azure.network.VirtualNetwork("test", {
 *     addressSpaces: ["10.0.0.0/16"],
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
 * const azurerm_network_interface_test = new azure.network.NetworkInterface("test", {
 *     ipConfigurations: [{
 *         name: "testconfiguration1",
 *         privateIpAddressAllocation: "Dynamic",
 *         subnetId: azurerm_subnet_frontend.id,
 *     }],
 *     location: azurerm_resource_group_test.location,
 *     name: "example-nic",
 *     resourceGroupName: azurerm_resource_group_test.name,
 * });
 * const azurerm_network_interface_application_gateway_backend_address_pool_association_test = new azure.network.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation("test", {
 *     backendAddressPoolId: azurerm_application_gateway_test.backendAddressPool.apply(__arg0 => __arg0%!v(PANIC=interface conversion: il.Node is nil, not *il.ResourceNode)),
 *     ipConfigurationName: "testconfiguration1",
 *     networkInterfaceId: azurerm_network_interface_test.id,
 * });
 * const azurerm_subnet_backend = new azure.network.Subnet("backend", {
 *     addressPrefix: "10.254.2.0/24",
 *     name: "backend",
 *     resourceGroupName: azurerm_resource_group_test.name,
 *     virtualNetworkName: azurerm_virtual_network_test.name,
 * });
 * ```
 */
export class NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation extends pulumi.CustomResource {
    /**
     * Get an existing NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationState, opts?: pulumi.CustomResourceOptions): NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation {
        return new NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation(name, <any>state, { ...opts, id: id });
    }

    /**
     * The ID of the Application Gateway's Backend Address Pool which this Network Interface which should be connected to. Changing this forces a new resource to be created.
     */
    public readonly backendAddressPoolId: pulumi.Output<string>;
    /**
     * The Name of the IP Configuration within the Network Interface which should be connected to the Backend Address Pool. Changing this forces a new resource to be created.
     */
    public readonly ipConfigurationName: pulumi.Output<string>;
    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    public readonly networkInterfaceId: pulumi.Output<string>;

    /**
     * Create a NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationArgs | NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationState = argsOrState as NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationState | undefined;
            inputs["backendAddressPoolId"] = state ? state.backendAddressPoolId : undefined;
            inputs["ipConfigurationName"] = state ? state.ipConfigurationName : undefined;
            inputs["networkInterfaceId"] = state ? state.networkInterfaceId : undefined;
        } else {
            const args = argsOrState as NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationArgs | undefined;
            if (!args || args.backendAddressPoolId === undefined) {
                throw new Error("Missing required property 'backendAddressPoolId'");
            }
            if (!args || args.ipConfigurationName === undefined) {
                throw new Error("Missing required property 'ipConfigurationName'");
            }
            if (!args || args.networkInterfaceId === undefined) {
                throw new Error("Missing required property 'networkInterfaceId'");
            }
            inputs["backendAddressPoolId"] = args ? args.backendAddressPoolId : undefined;
            inputs["ipConfigurationName"] = args ? args.ipConfigurationName : undefined;
            inputs["networkInterfaceId"] = args ? args.networkInterfaceId : undefined;
        }
        super("azure:network/networkInterfaceApplicationGatewayBackendAddressPoolAssociation:NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation resources.
 */
export interface NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationState {
    /**
     * The ID of the Application Gateway's Backend Address Pool which this Network Interface which should be connected to. Changing this forces a new resource to be created.
     */
    readonly backendAddressPoolId?: pulumi.Input<string>;
    /**
     * The Name of the IP Configuration within the Network Interface which should be connected to the Backend Address Pool. Changing this forces a new resource to be created.
     */
    readonly ipConfigurationName?: pulumi.Input<string>;
    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    readonly networkInterfaceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation resource.
 */
export interface NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationArgs {
    /**
     * The ID of the Application Gateway's Backend Address Pool which this Network Interface which should be connected to. Changing this forces a new resource to be created.
     */
    readonly backendAddressPoolId: pulumi.Input<string>;
    /**
     * The Name of the IP Configuration within the Network Interface which should be connected to the Backend Address Pool. Changing this forces a new resource to be created.
     */
    readonly ipConfigurationName: pulumi.Input<string>;
    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    readonly networkInterfaceId: pulumi.Input<string>;
}
