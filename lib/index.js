"use strict";
function default_1(styleApi) {
    var member = styleApi.member, alias = styleApi.alias, hasNoMember = styleApi.hasNoMember, hasOnlyNamespaceMember = styleApi.hasOnlyNamespaceMember, hasMultipleMembers = styleApi.hasMultipleMembers, hasSingleMember = styleApi.hasSingleMember, unicode = styleApi.unicode;
    return [
        // none (don't sort them, because side-effects may need a particular ordering)
        { match: hasNoMember },
        // {separator: true},
        // all
        { match: hasOnlyNamespaceMember, sort: member(unicode) },
        // {separator: true},
        // multiple
        { match: hasMultipleMembers, sort: member(unicode), sortNamedMembers: alias(unicode) },
        // {separator: true},
        // single
        { match: hasSingleMember, sort: member(unicode) },
    ];
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
