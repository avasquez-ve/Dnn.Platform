﻿// 
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License. See LICENSE file in the project root for full license information.
// 
using System.Collections.Generic;

namespace DotNetNuke.Tests.Integration.Executers.Dto
{
    public class TabPermissions
    {
        public int TabId { get; set; }

        public IList<Permission> PermissionDefinitions { get; set; }

        public IList<RolePermission> RolePermissions { get; set; }

        public IList<UserPermission> UserPermissions { get; set; }
    }
}
