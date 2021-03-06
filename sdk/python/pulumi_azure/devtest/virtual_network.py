# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class VirtualNetwork(pulumi.CustomResource):
    description: pulumi.Output[str]
    """
    A description for the Virtual Network.
    """
    lab_name: pulumi.Output[str]
    """
    Specifies the name of the Dev Test Lab in which the Virtual Network should be created. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Dev Test Virtual Network. Changing this forces a new resource to be created.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
    """
    subnet: pulumi.Output[dict]
    """
    A `subnet` block as defined below.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    unique_identifier: pulumi.Output[str]
    """
    The unique immutable identifier of the Dev Test Virtual Network.
    """
    def __init__(__self__, resource_name, opts=None, description=None, lab_name=None, name=None, resource_group_name=None, subnet=None, tags=None, __name__=None, __opts__=None):
        """
        Manages a Virtual Network within a Dev Test Lab.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: A description for the Virtual Network.
        :param pulumi.Input[str] lab_name: Specifies the name of the Dev Test Lab in which the Virtual Network should be created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Dev Test Virtual Network. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
        :param pulumi.Input[dict] subnet: A `subnet` block as defined below.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['description'] = description

        if lab_name is None:
            raise TypeError("Missing required property 'lab_name'")
        __props__['lab_name'] = lab_name

        __props__['name'] = name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['subnet'] = subnet

        __props__['tags'] = tags

        __props__['unique_identifier'] = None

        super(VirtualNetwork, __self__).__init__(
            'azure:devtest/virtualNetwork:VirtualNetwork',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

