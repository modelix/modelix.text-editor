package org.modelix.parser

class UniqueIdentifiers<E>() {
    private val VALID_IDENTIFIER_PATTERN = Regex("[a-zA-Z_][a-zA-Z0-9_]*")
    private val takenIdentifiers = HashSet<String>()
    private val assignedIdentifiers = HashMap<E, String>()

    fun get(key: E, preferredName: () -> String): String {
        return assignedIdentifiers.getOrPut(key) {
            val prefix = toValidIdentifier(preferredName())
            val candidates = sequenceOf(prefix) + (2..1000).asSequence().map { prefix + "_" + it }
            for (candidate in candidates) {
                if (takenIdentifiers.contains(candidate)) continue
                takenIdentifiers.add(candidate)
                return@getOrPut candidate
            }
            error("No many equal names: $preferredName")
        }
    }

    fun toValidIdentifier(s: String): String {
        if (s.matches(VALID_IDENTIFIER_PATTERN)) return s

        val sb = StringBuilder()
        for (i in s.indices) {
            val c = s[i]
            if (i == 0 && c in '0'..'9') {
                sb.append('_')
            }
            if (c == '_' || c in 'a'..'z' || c in 'A'..'Z' || c in '0'..'9') {
                sb.append(c)
            } else {
                sb.append('_')
            }
        }
        return sb.toString()
    }
}
