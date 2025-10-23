from bson import ObjectId
from typing import Any, Dict, List

def convert_objectid_to_str(obj: Any) -> Any:
    """
    Recursively convert ObjectId instances to strings in a document or list
    """
    if isinstance(obj, ObjectId):
        return str(obj)
    elif isinstance(obj, dict):
        return {key: convert_objectid_to_str(value) for key, value in obj.items()}
    elif isinstance(obj, list):
        return [convert_objectid_to_str(item) for item in obj]
    else:
        return obj

def prepare_document_for_response(doc: Dict) -> Dict:
    """
    Prepare a MongoDB document for JSON response by converting ObjectIds to strings
    """
    if doc is None:
        return None
    
    # Convert the document
    converted = convert_objectid_to_str(doc)
    
    # Handle the _id field specifically
    if '_id' in converted:
        converted['id'] = converted.pop('_id')
    
    return converted

def prepare_documents_for_response(docs: List[Dict]) -> List[Dict]:
    """
    Prepare a list of MongoDB documents for JSON response
    """
    return [prepare_document_for_response(doc) for doc in docs]
