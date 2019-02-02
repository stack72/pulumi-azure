# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import pulumi
import pulumi.runtime
from .. import utilities, tables

class ApplicationGateway(pulumi.CustomResource):
    authentication_certificates: pulumi.Output[list]
    """
    One or more `authentication_certificate` blocks as defined below.
    """
    backend_address_pools: pulumi.Output[list]
    """
    One or more `backend_address_pool` blocks as defined below.
    """
    backend_http_settings: pulumi.Output[list]
    """
    One or more `backend_http_settings` blocks as defined below.
    """
    disabled_ssl_protocols: pulumi.Output[list]
    """
    A list of SSL Protocols which should be disabled on this Application Gateway. Possible values are `TLSv1_0`, `TLSv1_1` and `TLSv1_2`.
    """
    frontend_ip_configurations: pulumi.Output[list]
    """
    One or more `frontend_ip_configuration` blocks as defined below.
    """
    frontend_ports: pulumi.Output[list]
    """
    One or more `frontend_port` blocks as defined below.
    """
    gateway_ip_configurations: pulumi.Output[list]
    """
    One or more `gateway_ip_configuration` blocks as defined below.
    """
    http_listeners: pulumi.Output[list]
    """
    One or more `http_listener` blocks as defined below.
    """
    location: pulumi.Output[str]
    """
    The Azure region where the Application Gateway should exist. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    The name of the Application Gateway. Changing this forces a new resource to be created.
    """
    probes: pulumi.Output[list]
    """
    One or more `probe` blocks as defined below.
    """
    request_routing_rules: pulumi.Output[list]
    """
    One or more `request_routing_rule` blocks as defined below.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to the Application Gateway should exist. Changing this forces a new resource to be created.
    """
    sku: pulumi.Output[dict]
    """
    A `sku` block as defined below.
    """
    ssl_certificates: pulumi.Output[list]
    """
    A list of `ssl_certificate` blocks as defined below.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    url_path_maps: pulumi.Output[list]
    """
    One or more `url_path_map` blocks as defined below.
    """
    waf_configuration: pulumi.Output[dict]
    """
    A `waf_configuration` block as defined below.
    """
    def __init__(__self__, __name__, __opts__=None, authentication_certificates=None, backend_address_pools=None, backend_http_settings=None, disabled_ssl_protocols=None, frontend_ip_configurations=None, frontend_ports=None, gateway_ip_configurations=None, http_listeners=None, location=None, name=None, probes=None, request_routing_rules=None, resource_group_name=None, sku=None, ssl_certificates=None, tags=None, url_path_maps=None, waf_configuration=None):
        """
        Manages an Application Gateway.
        
        :param str __name__: The name of the resource.
        :param pulumi.ResourceOptions __opts__: Options for the resource.
        :param pulumi.Input[list] authentication_certificates: One or more `authentication_certificate` blocks as defined below.
        :param pulumi.Input[list] backend_address_pools: One or more `backend_address_pool` blocks as defined below.
        :param pulumi.Input[list] backend_http_settings: One or more `backend_http_settings` blocks as defined below.
        :param pulumi.Input[list] disabled_ssl_protocols: A list of SSL Protocols which should be disabled on this Application Gateway. Possible values are `TLSv1_0`, `TLSv1_1` and `TLSv1_2`.
        :param pulumi.Input[list] frontend_ip_configurations: One or more `frontend_ip_configuration` blocks as defined below.
        :param pulumi.Input[list] frontend_ports: One or more `frontend_port` blocks as defined below.
        :param pulumi.Input[list] gateway_ip_configurations: One or more `gateway_ip_configuration` blocks as defined below.
        :param pulumi.Input[list] http_listeners: One or more `http_listener` blocks as defined below.
        :param pulumi.Input[str] location: The Azure region where the Application Gateway should exist. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the Application Gateway. Changing this forces a new resource to be created.
        :param pulumi.Input[list] probes: One or more `probe` blocks as defined below.
        :param pulumi.Input[list] request_routing_rules: One or more `request_routing_rule` blocks as defined below.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to the Application Gateway should exist. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] sku: A `sku` block as defined below.
        :param pulumi.Input[list] ssl_certificates: A list of `ssl_certificate` blocks as defined below.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[list] url_path_maps: One or more `url_path_map` blocks as defined below.
        :param pulumi.Input[dict] waf_configuration: A `waf_configuration` block as defined below.
        """
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['authentication_certificates'] = authentication_certificates

        if not backend_address_pools:
            raise TypeError('Missing required property backend_address_pools')
        __props__['backend_address_pools'] = backend_address_pools

        if not backend_http_settings:
            raise TypeError('Missing required property backend_http_settings')
        __props__['backend_http_settings'] = backend_http_settings

        __props__['disabled_ssl_protocols'] = disabled_ssl_protocols

        if not frontend_ip_configurations:
            raise TypeError('Missing required property frontend_ip_configurations')
        __props__['frontend_ip_configurations'] = frontend_ip_configurations

        if not frontend_ports:
            raise TypeError('Missing required property frontend_ports')
        __props__['frontend_ports'] = frontend_ports

        if not gateway_ip_configurations:
            raise TypeError('Missing required property gateway_ip_configurations')
        __props__['gateway_ip_configurations'] = gateway_ip_configurations

        if not http_listeners:
            raise TypeError('Missing required property http_listeners')
        __props__['http_listeners'] = http_listeners

        if not location:
            raise TypeError('Missing required property location')
        __props__['location'] = location

        __props__['name'] = name

        __props__['probes'] = probes

        if not request_routing_rules:
            raise TypeError('Missing required property request_routing_rules')
        __props__['request_routing_rules'] = request_routing_rules

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        __props__['resource_group_name'] = resource_group_name

        if not sku:
            raise TypeError('Missing required property sku')
        __props__['sku'] = sku

        __props__['ssl_certificates'] = ssl_certificates

        __props__['tags'] = tags

        __props__['url_path_maps'] = url_path_maps

        __props__['waf_configuration'] = waf_configuration

        super(ApplicationGateway, __self__).__init__(
            'azure:network/applicationGateway:ApplicationGateway',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

