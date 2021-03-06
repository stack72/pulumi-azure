# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Blob(pulumi.CustomResource):
    attempts: pulumi.Output[float]
    """
    The number of attempts to make per page or block when uploading. Defaults to `1`.
    """
    content_type: pulumi.Output[str]
    """
    The content type of the storage blob. Cannot be defined if `source_uri` is defined. Defaults to `application/octet-stream`.
    """
    name: pulumi.Output[str]
    """
    The name of the storage blob. Must be unique within the storage container the blob is located.
    """
    parallelism: pulumi.Output[float]
    """
    The number of workers per CPU core to run for concurrent uploads. Defaults to `8`.
    """
    resource_group_name: pulumi.Output[str]
    """
    The name of the resource group in which to
    create the storage container. Changing this forces a new resource to be created.
    """
    size: pulumi.Output[float]
    """
    Used only for `page` blobs to specify the size in bytes of the blob to be created. Must be a multiple of 512. Defaults to 0.
    """
    source: pulumi.Output[str]
    """
    An absolute path to a file on the local system. Cannot be defined if `source_uri` is defined.
    """
    source_uri: pulumi.Output[str]
    """
    The URI of an existing blob, or a file in the Azure File service, to use as the source contents
    for the blob to be created. Changing this forces a new resource to be created. Cannot be defined if `source` is defined.
    """
    storage_account_name: pulumi.Output[str]
    """
    Specifies the storage account in which to create the storage container.
    Changing this forces a new resource to be created.
    """
    storage_container_name: pulumi.Output[str]
    """
    The name of the storage container in which this blob should be created.
    """
    type: pulumi.Output[str]
    """
    The type of the storage blob to be created. One of either `block` or `page`. When not copying from an existing blob,
    this becomes required.
    """
    url: pulumi.Output[str]
    """
    The URL of the blob
    """
    def __init__(__self__, resource_name, opts=None, attempts=None, content_type=None, name=None, parallelism=None, resource_group_name=None, size=None, source=None, source_uri=None, storage_account_name=None, storage_container_name=None, type=None, __name__=None, __opts__=None):
        """
        Manage an Azure Storage Blob.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[float] attempts: The number of attempts to make per page or block when uploading. Defaults to `1`.
        :param pulumi.Input[str] content_type: The content type of the storage blob. Cannot be defined if `source_uri` is defined. Defaults to `application/octet-stream`.
        :param pulumi.Input[str] name: The name of the storage blob. Must be unique within the storage container the blob is located.
        :param pulumi.Input[float] parallelism: The number of workers per CPU core to run for concurrent uploads. Defaults to `8`.
        :param pulumi.Input[str] resource_group_name: The name of the resource group in which to
               create the storage container. Changing this forces a new resource to be created.
        :param pulumi.Input[float] size: Used only for `page` blobs to specify the size in bytes of the blob to be created. Must be a multiple of 512. Defaults to 0.
        :param pulumi.Input[str] source: An absolute path to a file on the local system. Cannot be defined if `source_uri` is defined.
        :param pulumi.Input[str] source_uri: The URI of an existing blob, or a file in the Azure File service, to use as the source contents
               for the blob to be created. Changing this forces a new resource to be created. Cannot be defined if `source` is defined.
        :param pulumi.Input[str] storage_account_name: Specifies the storage account in which to create the storage container.
               Changing this forces a new resource to be created.
        :param pulumi.Input[str] storage_container_name: The name of the storage container in which this blob should be created.
        :param pulumi.Input[str] type: The type of the storage blob to be created. One of either `block` or `page`. When not copying from an existing blob,
               this becomes required.
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

        __props__['attempts'] = attempts

        __props__['content_type'] = content_type

        __props__['name'] = name

        __props__['parallelism'] = parallelism

        if resource_group_name is None:
            raise TypeError("Missing required property 'resource_group_name'")
        __props__['resource_group_name'] = resource_group_name

        __props__['size'] = size

        __props__['source'] = source

        __props__['source_uri'] = source_uri

        if storage_account_name is None:
            raise TypeError("Missing required property 'storage_account_name'")
        __props__['storage_account_name'] = storage_account_name

        if storage_container_name is None:
            raise TypeError("Missing required property 'storage_container_name'")
        __props__['storage_container_name'] = storage_container_name

        __props__['type'] = type

        __props__['url'] = None

        super(Blob, __self__).__init__(
            'azure:storage/blob:Blob',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

