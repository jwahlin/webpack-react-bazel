workspace(name = "test_webpack")

load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

git_repository(
    name = "build_bazel_rules_nodejs",
    commit = "1a52d2e4b66577496922689dccb82da662714f03",
    remote = "https://github.com/bazelbuild/rules_nodejs.git",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")

node_repositories(package_json = ["//:package.json"])

git_repository(
    name = "net_tcncloud_git_m_protos",
    commit = "947cd1c3a19b0b641cf443187834e5203e31d15f",
    remote = "git@git.tcncloud.net:m/protos.git",
)

load("@net_tcncloud_git_m_protos//typescript:defs.bzl", "typescript_proto_dependencies")

typescript_proto_dependencies()
