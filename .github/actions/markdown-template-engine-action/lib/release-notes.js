/**
 * Pinpoint gitbook template engine
 * Copyright 2021-present NAVER Corp.
 * Apache License v2.0
 */

const axios = require('axios')

const whatsNewTempate = `# What's New in v__VERSION__
__BODY__
`

class ReleaseNotes {
    constructor(contents, version) {
        this.contents = contents
        this.version = version
    }

    getVersion() {
        return `v${this.version}`
    }

    static async makeLatestReleaseNotes(releaseClass) {
        const data = await releaseClass.latest()

        const tagName = ReleaseNotes.tagName(data.tag_name)
        const latestReleaseNotes = whatsNewTempate.replace('__VERSION__', tagName)
            .replace('__BODY__', data.body)
        return new ReleaseNotes(latestReleaseNotes, tagName)
    }

    static tagName(version) {
        return version.startsWith('v') ? version.substring(1) : version
    }

    static async makeOfMarkdownContents(contents) {
        const tagName = ReleaseNotes.tagName(data.tag_name)
        const latestReleaseNotes = whatsNewTempate.replace('__VERSION__', tagName)
            .replace('__BODY__', data.body)
        return new ReleaseNotes(latestReleaseNotes, tagName)
    }
}

module.exports = ReleaseNotes