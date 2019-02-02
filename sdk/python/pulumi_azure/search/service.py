# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Service(pulumi.CustomResource):
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    The name of the Search Service. Changing this forces a new resource to be created.
    """
    partition_count: pulumi.Output[int]
    """
    Default is 1. Valid values include 1, 2, 3, 4, 6, or 12. Valid only when `sku` is `standard`. Changing this forces a new resource to be created.
    """
    primary_key: pulumi.Output[str]
    """
    The Search Service Administration primary key.
    """
    replica_count: pulumi.Output[int]
    """
    Default is 1. Valid values include 1 through 12. Valid only when `sku` is `standard`. Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to create the Search Service. Changing this forces a new resource to be created.
    """
    secondary_key: pulumi.Output[str]
    """
    The Search Service Administration secondary key.
    """
    sku: pulumi.Output[str]
    """
    Valid values are `free` and `standard`. `standard2` and `standard3` are also valid, but can only be used when it's enabled on the backend by Microsoft support. `free` provisions the service in shared clusters. `standard` provisions the service in dedicated clusters.  Changing this forces a new resource to be created.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
    """
    def __init__(__self__, __name__, __opts__=None, location=None, name=None, partition_count=None, replica_count=None, resource_group_name=None, sku=None, tags=None):
        """
        Allows you to manage an Azure Search Service.
        
        :param str __name__: The name of the resource.
        :param pulumi.ResourceOptions __opts__: Options for the resource.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: The name of the Search Service. Changing this forces a new resource to be created.
        :param pulumi.Input[int] partition_count: Default is 1. Valid values include 1, 2, 3, 4, 6, or 12. Valid only when `sku` is `standard`. Changing this forces a new resource to be created.
        :param pulumi.Input[int] replica_count: Default is 1. Valid values include 1 through 12. Valid only when `sku` is `standard`. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to create the Search Service. Changing this forces a new resource to be created.
        :param pulumi.Input[str] sku: Valid values are `free` and `standard`. `standard2` and `standard3` are also valid, but can only be used when it's enabled on the backend by Microsoft support. `free` provisions the service in shared clusters. `standard` provisions the service in dedicated clusters.  Changing this forces a new resource to be created.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
        """
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not location:
            raise TypeError('Missing required property location')
        __props__['location'] = location

        __props__['name'] = name

        __props__['partition_count'] = partition_count

        __props__['replica_count'] = replica_count

        if not resource_group_name:
            raise TypeError('Missing required property resource_group_name')
        __props__['resource_group_name'] = resource_group_name

        if not sku:
            raise TypeError('Missing required property sku')
        __props__['sku'] = sku

        __props__['tags'] = tags

        __props__['primary_key'] = None
        __props__['secondary_key'] = None

        super(Service, __self__).__init__(
            'azure:search/service:Service',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

