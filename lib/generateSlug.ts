/** @format */

export const generateSlug=(slugInput:string)=> {
  slugInput = slugInput.replace(/^\s+|\s+$/g, ""); // trim
  slugInput = slugInput.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    slugInput = slugInput.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  slugInput = slugInput
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return slugInput;
}
