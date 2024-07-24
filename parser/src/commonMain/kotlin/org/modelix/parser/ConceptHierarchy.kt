package org.modelix.parser

import org.modelix.model.api.IConcept

class ConceptHierarchy() {
    val knownSubconcepts = HashMap<IConcept, MutableSet<IConcept>>()
    val loadedConcept = HashSet<IConcept>()

    fun loadConcept(subConcept: IConcept) {
        if (loadedConcept.contains(subConcept)) return
        loadedConcept.add(subConcept)
        for (superConcept in subConcept.getDirectSuperConcepts()) {
            knownSubconcepts.getOrPut(superConcept) { HashSet() }.add(subConcept)
            loadConcept(superConcept)
        }
    }
}
