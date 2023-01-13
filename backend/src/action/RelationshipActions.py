from .DatabaseActions import DatabaseActions

class RelationshipActions(DatabaseActions):
    
    def queryModifier(self, query, option):
        if option is not None:
            query += " " + option
        return query
    
    def hasMany(self, model, foreignKey, foreignValue, option = None):
        queryString = self.queryModifier("SELECT * FROM " + model + " WHERE " + foreignKey + " = " + str(foreignValue), option)
        query = self._index(queryString)
        modelClass = getattr(__import__('src.model.' + model + 'Model', fromlist=[model]), model + 'Model')
        result = []
        for item in query:
            result.append(modelClass(item).serialize())
        return result
    
    def hasOne(self, model, foreignKey, foreignValue, option = None):
        queryString = self.queryModifier("SELECT * FROM " + model + " WHERE " + foreignKey + " = " + str(foreignValue), option)
        query = self._get(foreignKey, (foreignValue,), queryString)
        modelClass = getattr(__import__('src.model.' + model + 'Model', fromlist=[model]), model + 'Model')
        return modelClass(query).serialize()
    
    def belongsTo(self, model, foreignKey, foreignValue, option = None):
        queryString = self.queryModifier("SELECT * FROM " + model + " WHERE " + foreignKey + " = %s", option)
        query = self._get(foreignKey, (foreignValue,), queryString)
        modelClass = getattr(__import__('src.model.' + model + 'Model', fromlist=[model]), model + 'Model')
        return modelClass(query).serialize() if query else None