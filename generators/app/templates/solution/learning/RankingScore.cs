using System;
using Microsoft.ProgramSynthesis;
using Microsoft.ProgramSynthesis.AST;

namespace <%= name %>.<%= learning %>
{
    public class <%= scoreHolder %> : Feature<double>
    {
        public <%= scoreHolder %>(Grammar grammar) : base(grammar, "<%= scoreFeature %>") {}

        protected override double GetFeatureValueForVariable(VariableNode variable) => 0;

        // Your ranking functions here
    }
}
