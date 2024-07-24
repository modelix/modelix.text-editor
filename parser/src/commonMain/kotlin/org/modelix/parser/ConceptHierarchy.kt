package org.modelix.parser

import org.modelix.model.api.IConcept

class ConceptHierarchy() {
    val knownSubconcepts = HashMap<IConcept, MutableSet<IConcept>>()
    val loadedConcepts = HashSet<IConcept>()
    val conceptsWithRules = HashSet<IConcept>()
    val referencedConcepts = HashSet<IConcept>()

    fun loadSuperConcepts(subConcept: IConcept) {
        if (loadedConcepts.contains(subConcept)) return
        loadedConcepts.add(subConcept)
        for (superConcept in subConcept.getDirectSuperConcepts()) {
            knownSubconcepts.getOrPut(superConcept) { HashSet() }.add(subConcept)
            loadSuperConcepts(superConcept)
        }
    }

    fun hasRule(concept: IConcept) {
        loadSuperConcepts(concept)
        conceptsWithRules += concept
    }

    fun isReferenced(concept: IConcept) {
        loadSuperConcepts(concept)
        referencedConcepts += concept
    }

    fun getDirectSubConcepts(superConcept: IConcept): Set<IConcept> = knownSubconcepts[superConcept] ?: emptySet()
}
