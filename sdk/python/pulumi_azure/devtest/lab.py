# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Lab(pulumi.CustomResource):
    artifacts_storage_account_id: pulumi.Output[str]
    """
    The ID of the Storage Account used for Artifact Storage.
    """
    default_premium_storage_account_id: pulumi.Output[str]
    """
    The ID of the Default Premium Storage Account for this Dev Test Lab.
    """
    default_storage_account_id: pulumi.Output[str]
    """
    The ID of the Default Storage Account for this Dev Test Lab.
    """
    key_vault_id: pulumi.Output[str]
    """
    The ID of the Key used for this Dev Test Lab.
    """
    location: pulumi.Output[str]
    """
    Specifies the supported Azure location where the Dev Test Lab should exist. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Specifies the name of the Dev Test Lab. Changing this forces a new resource to be created.
    """
    premium_data_disk_storage_account_id: pulumi.Output[str]
    """
    The ID of the Storage Account used for Storage of Premium Data Disk.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group under which the Dev Test Lab resource has to be created. Changing this forces a new resource to be created.
    """
    storage_type: pulumi.Output[str]
    """
    The type of storage used by the Dev Test Lab. Possible values are `Standard` and `Premium`. Defaults to `Premium`. Changing this forces a new resource to be created.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    unique_identifier: pulumi.Output[str]
    """
    The unique immutable identifier of the Dev Test Lab.
    """
    def __init__(__self__, resource_name, opts=None, location=None, name=None, resource_group_name=None, storage_type=None, tags=None, __name__=None, __opts__=None):
        """
        Manages a Dev Test Lab.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] location: Specifies the supported Azure location where the Dev Test Lab should exist. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Specifies the name of the Dev Test Lab. Changing this forces a new resource to be created.
        :param pulumi.Input[str] resource_group_name: The name of the resource group under which the Dev Test Lab resource has to be created. Changing this forces a new resource to be created.
        :param pulumi.Input[str] storage_type: The type of storage used by the Dev Test Lab. Possible values are `Standard` and `Premium`. Defaults to `Premium`. Changing this forces a new resource to be created.
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

        if location is None:
            raise TypeError("Missing required property 'location'")
        __props__['location'] = location

        __props__['name'] = name

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['storage_type'] = storage_type

        __props__['tags'] = tags

        __props__['artifacts_storage_account_id'] = None
        __props__['default_premium_storage_account_id'] = None
        __props__['default_storage_account_id'] = None
        __props__['key_vault_id'] = None
        __props__['premium_data_disk_storage_account_id'] = None
        __props__['unique_identifier'] = None

        super(Lab, __self__).__init__(
            'azure:devtest/lab:Lab',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

